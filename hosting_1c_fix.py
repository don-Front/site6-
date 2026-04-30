# Улучшенная конфигурация для работы с 1С на хостинге
import aiohttp
import ssl
import asyncio
from typing import Dict, Any, Optional
import logging
import os

# Настройка логирования для диагностики
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class HostingConfig1C:
    """Конфигурация для работы с 1С на хостинге"""
    
    def __init__(self):
        self.base_url = 'https://web.turbo-don.ru/web1C/hs'
        self.endpoint = 'Options'
        self.auth_token = os.getenv("ONE_C_AUTH_TOKEN", "")
        
        # Увеличенные таймауты для хостинга
        self.timeout = 60  # Увеличиваем до 60 секунд
        self.connect_timeout = 30  # Таймаут подключения
        
        # SSL настройки для хостинга
        self.ssl_context = self._create_ssl_context()
        
        # Настройки повторных попыток
        self.max_retries = 3
        self.retry_delay = 2  # секунды между попытками
    
    def _create_ssl_context(self) -> ssl.SSLContext:
        """Создание SSL контекста с настройками для хостинга"""
        context = ssl.create_default_context()
        
        # Для хостинга может потребоваться менее строгая проверка SSL
        # ВНИМАНИЕ: Используйте только если есть проблемы с SSL на хостинге
        # context.check_hostname = False
        # context.verify_mode = ssl.CERT_NONE
        
        return context
    
    def get_headers(self) -> Dict[str, str]:
        """Получение заголовков для запроса"""
        return {
            'Authorization': self.auth_token,
            'User-Agent': 'Equipment-Selection-System/1.0',
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive'
        }
    
    def get_timeout(self) -> aiohttp.ClientTimeout:
        """Получение настроек таймаута"""
        return aiohttp.ClientTimeout(
            total=self.timeout,
            connect=self.connect_timeout,
            sock_read=self.timeout
        )

class Enhanced1CConnector:
    """Улучшенный коннектор для работы с 1С на хостинге"""
    
    def __init__(self, config: HostingConfig1C):
        self.config = config
    
    async def test_connection(self) -> Dict[str, Any]:
        """Тестирование подключения к 1С с диагностикой"""
        logger.info("🔍 Начинаем тестирование подключения к 1С...")
        
        full_url = f"{self.config.base_url}/{self.config.endpoint}"
        
        # Создаем коннектор с SSL настройками
        connector = aiohttp.TCPConnector(
            ssl=self.config.ssl_context,
            limit=10,
            limit_per_host=5,
            keepalive_timeout=30,
            enable_cleanup_closed=True
        )
        
        try:
            async with aiohttp.ClientSession(
                connector=connector,
                timeout=self.config.get_timeout(),
                headers=self.config.get_headers()
            ) as session:
                
                logger.info(f"📡 Отправляем запрос к: {full_url}")
                
                async with session.get(full_url) as response:
                    response_text = await response.text()
                    
                    logger.info(f"📨 Получен ответ: статус {response.status}")
                    
                    return {
                        "status": "success" if response.status == 200 else "error",
                        "message": "Сервер 1С доступен" if response.status == 200 else f"Ошибка сервера 1С: {response.status}",
                        "url": full_url,
                        "http_status": response.status,
                        "response_text": response_text[:500],  # Ограничиваем размер ответа
                        "headers": dict(response.headers),
                        "ssl_info": {
                            "peer_cert": str(response.connection.transport.get_extra_info('peercert')) if hasattr(response.connection.transport, 'get_extra_info') else None
                        }
                    }
                    
        except aiohttp.ClientConnectorError as e:
            logger.error(f"🔌 Ошибка подключения: {e}")
            return {
                "status": "error",
                "message": f"Не удается подключиться к серверу 1С: {str(e)}",
                "url": full_url,
                "error_type": "connection_error",
                "suggestions": [
                    "Проверьте, разрешены ли исходящие HTTPS-соединения на хостинге",
                    "Убедитесь, что хостинг не блокирует домен web.turbo-don.ru",
                    "Проверьте настройки файрволла хостинга"
                ]
            }
        except aiohttp.ServerTimeoutError as e:
            logger.error(f"⏰ Таймаут: {e}")
            return {
                "status": "error",
                "message": f"Превышено время ожидания ответа от сервера 1С: {str(e)}",
                "url": full_url,
                "error_type": "timeout_error",
                "suggestions": [
                    "Увеличьте таймаут в настройках",
                    "Проверьте скорость соединения хостинга",
                    "Обратитесь к администратору сервера 1С"
                ]
            }
        except ssl.SSLError as e:
            logger.error(f"🔒 Ошибка SSL: {e}")
            return {
                "status": "error",
                "message": f"Ошибка SSL при подключении к серверу 1С: {str(e)}",
                "url": full_url,
                "error_type": "ssl_error",
                "suggestions": [
                    "Проверьте SSL-сертификат сервера 1С",
                    "Обновите корневые сертификаты на хостинге",
                    "Рассмотрите возможность отключения проверки SSL (небезопасно)"
                ]
            }
        except Exception as e:
            logger.error(f"❌ Неожиданная ошибка: {e}")
            return {
                "status": "error",
                "message": f"Неожиданная ошибка при подключении к 1С: {str(e)}",
                "url": full_url,
                "error_type": "unknown_error"
            }
    
    async def send_data_with_retry(self, json_data: str) -> Dict[str, Any]:
        """Отправка данных в 1С с повторными попытками"""
        logger.info("🔄 Начинаем отправку данных в 1С с повторными попытками...")
        
        for attempt in range(self.config.max_retries):
            try:
                logger.info(f"📤 Попытка {attempt + 1} из {self.config.max_retries}")
                
                result = await self._send_data_single_attempt(json_data)
                
                if result["status"] == "success":
                    logger.info("✅ Данные успешно отправлены в 1С")
                    return result
                
                if attempt < self.config.max_retries - 1:
                    logger.info(f"⏳ Ожидание {self.config.retry_delay} секунд перед следующей попыткой...")
                    await asyncio.sleep(self.config.retry_delay)
                
            except Exception as e:
                logger.error(f"❌ Ошибка в попытке {attempt + 1}: {e}")
                
                if attempt < self.config.max_retries - 1:
                    await asyncio.sleep(self.config.retry_delay)
                else:
                    return {
                        "status": "error",
                        "message": f"Все попытки отправки данных в 1С неуспешны: {str(e)}"
                    }
        
        return {
            "status": "error",
            "message": "Превышено максимальное количество попыток отправки данных в 1С"
        }
    
    async def _send_data_single_attempt(self, json_data: str) -> Dict[str, Any]:
        """Одна попытка отправки данных в 1С"""
        full_url = f"{self.config.base_url}/{self.config.endpoint}"
        
        connector = aiohttp.TCPConnector(
            ssl=self.config.ssl_context,
            limit=10,
            limit_per_host=5
        )
        
        async with aiohttp.ClientSession(
            connector=connector,
            timeout=self.config.get_timeout(),
            headers=self.config.get_headers()
        ) as session:
            
            async with session.get(
                url=full_url,
                params={'data': json_data}
            ) as response:
                response_text = await response.text()
                
                return {
                    "status": "success" if response.status == 200 else "error",
                    "response_status": response.status,
                    "response_text": response_text,
                    "message": "Данные успешно отправлены в 1С" if response.status == 200 else f"Сервер 1С вернул ошибку {response.status}"
                }

# Пример использования
async def example_usage():
    """Пример использования улучшенного коннектора"""
    config = HostingConfig1C()
    connector = Enhanced1CConnector(config)
    
    # Тестирование подключения
    test_result = await connector.test_connection()
    print("Результат тестирования:", test_result)
    
    # Отправка данных (пример)
    if test_result["status"] == "success":
        sample_data = '{"test": "data"}'
        send_result = await connector.send_data_with_retry(sample_data)
        print("Результат отправки:", send_result)

if __name__ == "__main__":
    asyncio.run(example_usage())