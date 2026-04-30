# Развертывание FastAPI приложения с Docker

## 📋 Обзор

Данная инструкция описывает процесс развертывания FastAPI приложения "Turbo Helper" на сервере с Docker по IP `91.229.9.43`.

## 🛠 Предварительные требования

### На локальной машине:
- Git
- SSH клиент
- Текстовый редактор

### На сервере:
- Ubuntu/Debian Linux
- Docker и Docker Compose
- Открытые порты 80 и 443
- SSH доступ

## 📁 Структура проекта

```
turbo-helper/
├── Dockerfile                 # Конфигурация Docker образа
├── docker-compose.yml        # Оркестрация контейнеров
├── deploy.sh                 # Скрипт автоматического развертывания
├── main.py                   # Основное FastAPI приложение
├── requirements.txt          # Python зависимости
├── data.json                 # Данные приложения
├── static/                   # Статические файлы
├── templates/                # HTML шаблоны
└── nginx/
    ├── nginx.conf           # Конфигурация Nginx
    ├── ssl/                 # SSL сертификаты
    └── www/                 # Временные файлы для Certbot
```

## 🚀 Пошаговое развертывание

### Шаг 1: Подключение к серверу

```bash
ssh root@91.229.9.43
```

### Шаг 2: Установка Docker (если не установлен)

```bash
# Обновление системы
apt update && apt upgrade -y

# Установка Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Установка Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Проверка установки
docker --version
docker-compose --version
```

### Шаг 3: Загрузка проекта на сервер

#### Вариант A: Через Git (рекомендуется)

```bash
# Клонирование репозитория
git clone <URL_ВАШЕГО_РЕПОЗИТОРИЯ> turbo-helper
cd turbo-helper
```

#### Вариант B: Через SCP

На локальной машине:
```bash
# Создание архива
tar -czf turbo-helper.tar.gz .

# Загрузка на сервер
scp turbo-helper.tar.gz root@91.229.9.43:/root/

# На сервере
ssh root@91.229.9.43
cd /root
tar -xzf turbo-helper.tar.gz
mv turbo-helper-extracted turbo-helper
cd turbo-helper
```

### Шаг 4: Настройка конфигурации

#### 4.1 Редактирование docker-compose.yml

```bash
nano docker-compose.yml
```

Замените в секции certbot:
- `your-email@example.com` на ваш email
- `turbo-helper.ru` на ваш домен (если есть)

#### 4.2 Редактирование nginx.conf

```bash
nano nginx/nginx.conf
```

Замените `turbo-helper.ru` на ваш домен или оставьте только IP `91.229.9.43`.

### Шаг 5: Запуск приложения

#### Автоматический запуск (рекомендуется)

```bash
# Делаем скрипт исполняемым
chmod +x deploy.sh

# Запуск развертывания
./deploy.sh production
```

#### Ручной запуск

```bash
# Создание необходимых директорий
mkdir -p nginx/ssl nginx/www logs

# Сборка и запуск контейнеров
docker-compose up --build -d

# Проверка статуса
docker-compose ps
```

### Шаг 6: Настройка SSL (опционально)

Если у вас есть домен:

```bash
# Получение SSL сертификата
docker-compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email \
  -d your-domain.com \
  -d www.your-domain.com

# Перезапуск nginx
docker-compose restart nginx
```

## 🔍 Проверка работы

### Проверка доступности

```bash
# Локальная проверка
curl http://localhost
curl http://localhost/docs

# Внешняя проверка
curl http://91.229.9.43
curl http://91.229.9.43/docs
```

### Просмотр логов

```bash
# Все логи
docker-compose logs

# Логи конкретного сервиса
docker-compose logs fastapi-app
docker-compose logs nginx

# Логи в реальном времени
docker-compose logs -f
```

### Проверка статуса контейнеров

```bash
docker-compose ps
docker stats
```

## 🛠 Управление приложением

### Основные команды

```bash
# Перезапуск всех сервисов
docker-compose restart

# Перезапуск конкретного сервиса
docker-compose restart fastapi-app

# Остановка
docker-compose down

# Остановка с удалением volumes
docker-compose down -v

# Обновление приложения
git pull
docker-compose up --build -d
```

### Обновление кода

```bash
# Остановка приложения
docker-compose down

# Обновление кода
git pull

# Пересборка и запуск
docker-compose up --build -d
```

## 🔧 Настройка домена

### Настройка DNS

Если у вас есть домен, настройте A-записи:

```
A    @              91.229.9.43
A    www            91.229.9.43
```

### Обновление конфигурации для домена

1. Отредактируйте `nginx/nginx.conf`
2. Замените `91.229.9.43` на ваш домен
3. Перезапустите nginx: `docker-compose restart nginx`

## 🚨 Устранение неполадок

### Проблема: Контейнеры не запускаются

```bash
# Проверка логов
docker-compose logs

# Проверка портов
netstat -tulpn | grep :80
netstat -tulpn | grep :443

# Освобождение портов
sudo fuser -k 80/tcp
sudo fuser -k 443/tcp
```

### Проблема: Приложение недоступно

```bash
# Проверка статуса
docker-compose ps

# Проверка сети
docker network ls
docker network inspect turbo-helper_app-network

# Тест подключения к приложению
docker-compose exec nginx curl http://fastapi-app:8000
```

### Проблема: SSL сертификаты

```bash
# Проверка сертификатов
ls -la nginx/ssl/live/

# Тестовый сертификат (для отладки)
docker-compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email \
  --staging \
  -d your-domain.com
```

### Проблема: Недостаток места

```bash
# Очистка Docker
docker system prune -a

# Очистка логов
truncate -s 0 /var/lib/docker/containers/*/*-json.log
```

## 📊 Мониторинг

### Просмотр ресурсов

```bash
# Использование ресурсов контейнерами
docker stats

# Использование диска
df -h
du -sh /var/lib/docker/
```

### Настройка логирования

Добавьте в `docker-compose.yml`:

```yaml
services:
  fastapi-app:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

## 🔐 Безопасность

### Рекомендации

1. **Обновляйте систему регулярно**:
   ```bash
   apt update && apt upgrade -y
   ```

2. **Настройте firewall**:
   ```bash
   ufw allow 22
   ufw allow 80
   ufw allow 443
   ufw enable
   ```

3. **Используйте SSL сертификаты**
4. **Регулярно делайте бэкапы**:
   ```bash
   tar -czf backup-$(date +%Y%m%d).tar.gz turbo-helper/
   ```

## 📞 Поддержка

### Полезные ссылки

- [Docker Documentation](https://docs.docker.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)

### Контакты

При возникновении проблем проверьте:
1. Логи приложения: `docker-compose logs`
2. Статус контейнеров: `docker-compose ps`
3. Доступность портов: `netstat -tulpn`
4. Использование ресурсов: `docker stats`

---

**Успешного развертывания! 🚀**