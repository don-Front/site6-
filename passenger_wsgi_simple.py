#!/usr/bin/python3
# -*- coding: utf-8 -*-

import sys
import os

# Добавляем текущую директорию в путь Python
current_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, current_dir)

try:
    # Импортируем FastAPI приложение из main.py
    from main import app as application
    
    # Проверяем, что приложение загружено
    if application is None:
        raise ImportError("Application is None")
        
except ImportError as e:
    # Создаем простое WSGI приложение для диагностики
    def application(environ, start_response):
        status = '500 Internal Server Error'
        headers = [('Content-type', 'text/html; charset=utf-8')]
        start_response(status, headers)
        
        error_msg = f"""
        <html>
        <head><title>Ошибка импорта</title></head>
        <body>
        <h1>Ошибка импорта FastAPI приложения</h1>
        <p><strong>Ошибка:</strong> {str(e)}</p>
        <p><strong>Python версия:</strong> {sys.version}</p>
        <p><strong>Текущая директория:</strong> {os.getcwd()}</p>
        <p><strong>Python path:</strong></p>
        <ul>
        """
        
        for path in sys.path:
            error_msg += f"<li>{path}</li>"
            
        error_msg += """
        </ul>
        <p><strong>Файлы в текущей директории:</strong></p>
        <ul>
        """
        
        try:
            for file in os.listdir('.'):
                error_msg += f"<li>{file}</li>"
        except Exception as list_error:
            error_msg += f"<li>Ошибка чтения директории: {str(list_error)}</li>"
            
        error_msg += """
        </ul>
        </body>
        </html>
        """
        
        return [error_msg.encode('utf-8')]

# Тестовая функция для локальной проверки
if __name__ == "__main__":
    print("Тестирование passenger_wsgi.py...")
    print(f"Python версия: {sys.version}")
    print(f"Текущая директория: {os.getcwd()}")
    print(f"Файлы в директории: {os.listdir('.')}")
    
    try:
        from main import app
        print("✓ Успешно импортировано приложение из main.py")
        print(f"✓ Тип приложения: {type(app)}")
    except Exception as e:
        print(f"✗ Ошибка импорта: {e}")