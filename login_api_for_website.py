"""
Код для принятия логинов на вашем сайте
Этот файл содержит готовый код для интеграции в ваш веб-сайт
"""

from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
import json
import logging
from datetime import datetime
import os
from pathlib import Path

# Настройка логирования
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Создание FastAPI приложения
app = FastAPI(
    title="Login API",
    description="API для принятия логинов с 1С",
    version="1.0.0"
)

# Настройки безопасности
API_TOKEN = os.getenv("API_TOKEN", "change-me")
security = HTTPBearer()

# Модели данных
class LoginData(BaseModel):
    login: str = Field(..., description="Логин пользователя")

class APIRequest(BaseModel):
    type: str = Field(..., description="Тип данных")
    data: Dict[Any, Any] = Field(..., description="Данные")
    timestamp: Optional[str] = Field(None, description="Временная метка")

class APIResponse(BaseModel):
    status: str = Field(..., description="Статус ответа")
    message: str = Field(..., description="Сообщение")
    received_at: str = Field(..., description="Время получения")
    data_type: Optional[str] = Field(None, description="Тип данных")

# Функция проверки токена
def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """Проверка токена авторизации"""
    if credentials.credentials != API_TOKEN:
        raise HTTPException(
            status_code=401,
            detail="Неверный токен авторизации"
        )
    return credentials.credentials

# Основной эндпоинт для принятия данных
@app.post("/api/1c/data", response_model=APIResponse)
async def receive_1c_data(
    request_data: APIRequest,
    token: str = Depends(verify_token)
):
    """Принятие данных от 1С"""
    try:
        logger.info(f"Получен запрос типа: {request_data.type}")
        
        # Обработка данных в зависимости от типа
        if request_data.type == "login":
            result = await process_login(request_data.data)
        else:
            result = {"status": "error", "message": f"Неподдерживаемый тип данных: {request_data.type}"}
        
        # Сохранение данных в файл (опционально)
        await save_data_to_file(request_data)
        
        # Формирование ответа
        response = APIResponse(
            status="success",
            message="Данные успешно получены и обработаны",
            received_at=datetime.now().isoformat(),
            data_type=request_data.type
        )
        
        logger.info(f"Данные успешно обработаны: {request_data.type}")
        return response
        
    except Exception as e:
        logger.error(f"Ошибка обработки запроса: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Ошибка сервера: {str(e)}")

# Функция обработки логина
async def process_login(data):
    """Обработка данных логина"""
    try:
        login_data = LoginData(**data)
        logger.info(f"Получен логин: {login_data.login}")
        
        # ЗДЕСЬ ВЫ МОЖЕТЕ ДОБАВИТЬ СВОЮ ЛОГИКУ:
        # - Сохранение в базу данных
        # - Отправка уведомлений
        # - Интеграция с CRM системой
        # - Любая другая обработка
        
        # Пример: сохранение в базу данных (псевдокод)
        # await save_login_to_database(login_data.login)
        
        # Пример: отправка уведомления (псевдокод)
        # await send_notification(f"Новый логин: {login_data.login}")
        
        return {"status": "success", "message": f"Логин {login_data.login} обработан"}
        
    except Exception as e:
        logger.error(f"Ошибка обработки логина: {str(e)}")
        raise HTTPException(status_code=500, detail="Ошибка обработки логина")

# Функция сохранения данных в файл
async def save_data_to_file(request_data: APIRequest):
    """Сохранение данных в файл для архива"""
    try:
        # Создание папки для данных
        data_dir = Path("received_data")
        data_dir.mkdir(exist_ok=True)
        
        # Формирование имени файла с временной меткой
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{request_data.type}_{timestamp}.json"
        file_path = data_dir / filename
        
        # Сохранение данных
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(request_data.dict(), f, ensure_ascii=False, indent=2)
        
        logger.info(f"Данные сохранены в файл: {file_path}")
        
    except Exception as e:
        logger.error(f"Ошибка сохранения данных: {str(e)}")

# Тестовый эндпоинт
@app.get("/api/test")
async def test_endpoint():
    """Тестовый эндпоинт для проверки работы API"""
    return {
        "status": "success",
        "message": "API работает корректно",
        "timestamp": datetime.now().isoformat()
    }

# Главная страница
@app.get("/")
async def root():
    """Главная страница API"""
    return {
        "message": "Login API для принятия данных от 1С",
        "version": "1.0.0",
        "endpoints": ["/api/1c/data", "/api/test"]
    }

# Запуск сервера
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)

"""
ИНСТРУКЦИЯ ПО ИСПОЛЬЗОВАНИЮ:

1. Установите зависимости:
   pip install fastapi uvicorn

2. Запустите сервер:
   python login_api_for_website.py

3. API будет доступен по адресу:
   http://localhost:8001

4. Документация API:
   http://localhost:8001/docs

5. Для интеграции с вашим сайтом:
   - Замените API_TOKEN на ваш секретный токен
   - Добавьте свою логику в функцию process_login()
   - Настройте сохранение в вашу базу данных
   - Добавьте необходимые уведомления

6. Структура запроса от 1С:
   {
     "type": "login",
     "data": {
       "login": "Имя пользователя"
     },
     "timestamp": "2025-10-30T15:59:38"
   }

7. Ответ сервера:
   {
     "status": "success",
     "message": "Данные успешно получены и обработаны",
     "received_at": "2025-10-30T15:59:38",
     "data_type": "login"
   }
"""