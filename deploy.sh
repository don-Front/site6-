#!/bin/bash

# Скрипт развертывания FastAPI приложения с Docker
# Использование: ./deploy.sh [production|staging]

set -e  # Остановка при ошибке

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Функция для вывода сообщений
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
    exit 1
}

# Проверка аргументов
ENVIRONMENT=${1:-production}
if [[ "$ENVIRONMENT" != "production" && "$ENVIRONMENT" != "staging" ]]; then
    error "Неверное окружение. Используйте: production или staging"
fi

log "Начинаем развертывание в окружении: $ENVIRONMENT"

# Проверка наличия Docker
if ! command -v docker &> /dev/null; then
    error "Docker не установлен"
fi

if ! command -v docker-compose &> /dev/null; then
    error "Docker Compose не установлен"
fi

# Проверка наличия необходимых файлов
REQUIRED_FILES=("Dockerfile" "docker-compose.yml" "main.py" "requirements.txt")
for file in "${REQUIRED_FILES[@]}"; do
    if [[ ! -f "$file" ]]; then
        error "Файл $file не найден"
    fi
done

log "Все необходимые файлы найдены"

# Создание необходимых директорий
log "Создание необходимых директорий..."
mkdir -p nginx/ssl
mkdir -p nginx/www
mkdir -p logs

# Остановка существующих контейнеров
log "Остановка существующих контейнеров..."
docker-compose down --remove-orphans || true

# Очистка старых образов (опционально)
if [[ "$ENVIRONMENT" == "production" ]]; then
    log "Очистка неиспользуемых Docker образов..."
    docker system prune -f || true
fi

# Сборка и запуск контейнеров
log "Сборка и запуск контейнеров..."
if [[ "$ENVIRONMENT" == "production" ]]; then
    docker-compose up --build -d
else
    # Для staging используем другой compose файл если есть
    if [[ -f "docker-compose.staging.yml" ]]; then
        docker-compose -f docker-compose.staging.yml up --build -d
    else
        docker-compose up --build -d
    fi
fi

# Ожидание запуска сервисов
log "Ожидание запуска сервисов..."
sleep 10

# Проверка статуса контейнеров
log "Проверка статуса контейнеров..."
if ! docker-compose ps | grep -q "Up"; then
    error "Не все контейнеры запущены успешно"
fi

# Проверка доступности приложения
log "Проверка доступности приложения..."
MAX_ATTEMPTS=30
ATTEMPT=1

while [[ $ATTEMPT -le $MAX_ATTEMPTS ]]; do
    if curl -f -s http://localhost/health > /dev/null 2>&1; then
        log "Приложение успешно запущено и доступно!"
        break
    fi
    
    if [[ $ATTEMPT -eq $MAX_ATTEMPTS ]]; then
        warn "Приложение не отвечает после $MAX_ATTEMPTS попыток"
        log "Проверьте логи: docker-compose logs"
        break
    fi
    
    echo -n "."
    sleep 2
    ((ATTEMPT++))
done

# Настройка SSL сертификатов (только для production)
if [[ "$ENVIRONMENT" == "production" ]]; then
    log "Настройка SSL сертификатов..."
    
    # Проверяем, есть ли уже сертификаты
    if [[ ! -f "nginx/ssl/live/turbo-helper.ru/fullchain.pem" ]]; then
        warn "SSL сертификаты не найдены"
        log "Для получения SSL сертификатов выполните:"
        echo -e "${BLUE}docker-compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot --email your-email@example.com --agree-tos --no-eff-email -d turbo-helper.ru -d www.turbo-helper.ru${NC}"
        echo -e "${BLUE}Затем перезапустите nginx: docker-compose restart nginx${NC}"
    else
        log "SSL сертификаты найдены"
    fi
fi

# Показать статус
log "Статус развертывания:"
docker-compose ps

# Показать логи последних запусков
log "Последние логи приложения:"
docker-compose logs --tail=20 fastapi-app

log "Развертывание завершено!"
log "Приложение доступно по адресу:"
if [[ "$ENVIRONMENT" == "production" ]]; then
    echo -e "${BLUE}  - https://turbo-helper.ru${NC}"
    echo -e "${BLUE}  - https://91.229.9.43${NC}"
else
    echo -e "${BLUE}  - http://localhost${NC}"
    echo -e "${BLUE}  - http://91.229.9.43${NC}"
fi

log "Полезные команды:"
echo -e "${BLUE}  - Просмотр логов: docker-compose logs -f${NC}"
echo -e "${BLUE}  - Перезапуск: docker-compose restart${NC}"
echo -e "${BLUE}  - Остановка: docker-compose down${NC}"
echo -e "${BLUE}  - Обновление: git pull && ./deploy.sh $ENVIRONMENT${NC}"