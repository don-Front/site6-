#!/usr/bin/python3
# -*- coding: utf-8 -*-

import sys
import os

# Устанавливаем кодировку по умолчанию
import locale
locale.setlocale(locale.LC_ALL, 'C.UTF-8')

# Добавляем пути для поиска модулей
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.insert(0, current_dir)

# Устанавливаем переменные окружения
os.environ.setdefault('PYTHONPATH', current_dir)
os.environ.setdefault('PYTHONIOENCODING', 'utf-8')

# Импортируем необходимые модули для WSGI
try:
    from main import app
    
    # Создаем WSGI-совместимое приложение
    def application(environ, start_response):
        # Устанавливаем кодировку для окружения
        for key, value in environ.items():
            if isinstance(value, str):
                environ[key] = value.encode('latin1').decode('utf-8', errors='ignore')
        
        # Вызываем FastAPI приложение через ASGI-to-WSGI адаптер
        from asgiref.wsgi import WsgiToAsgi
        asgi_app = WsgiToAsgi(app)
        return asgi_app(environ, start_response)
        
except ImportError as e:
    # Если не удается импортировать, создаем простое приложение для диагностики
    def application(environ, start_response):
        status = '200 OK'
        headers = [('Content-type', 'text/html; charset=utf-8')]
        start_response(status, headers)
        
        response_body = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Диагностика FastAPI на reg.ru</title>
    <style>
        body {{ font-family: Arial, sans-serif; margin: 20px; }}
        .error {{ color: red; }}
        .success {{ color: green; }}
        .info {{ background: #f0f0f0; padding: 10px; margin: 10px 0; }}
    </style>
</head>
<body>
    <h1>Диагностика FastAPI приложения</h1>
    
    <div class="info">
        <h3>Информация о системе:</h3>
        <p><strong>Python версия:</strong> {sys.version}</p>
        <p><strong>Исполняемый файл Python:</strong> {sys.executable}</p>
        <p><strong>Текущая рабочая директория:</strong> {os.getcwd()}</p>
        <p><strong>Директория скрипта:</strong> {current_dir}</p>
    </div>
    
    <div class="info">
        <h3>Python Path:</h3>
        <ul>
        """
        
        for path in sys.path:
            response_body += f"<li>{path}</li>"
            
        response_body += """
        </ul>
    </div>
    
    <div class="info">
        <h3>Файлы в текущей директории:</h3>
        <ul>
        """
        
        try:
            files = sorted(os.listdir('.'))
            for file in files:
                file_path = os.path.join('.', file)
                if os.path.isfile(file_path):
                    size = os.path.getsize(file_path)
                    response_body += f"<li>{file} ({size} байт)</li>"
                else:
                    response_body += f"<li>{file}/ (директория)</li>"
        except Exception as list_error:
            response_body += f"<li class='error'>Ошибка чтения директории: {str(list_error)}</li>"
            
        response_body += f"""
        </ul>
    </div>
    
    <div class="info">
        <h3>Переменные окружения:</h3>
        <ul>
            <li><strong>PYTHONPATH:</strong> {os.environ.get('PYTHONPATH', 'не установлена')}</li>
            <li><strong>PYTHONIOENCODING:</strong> {os.environ.get('PYTHONIOENCODING', 'не установлена')}</li>
            <li><strong>PATH:</strong> {os.environ.get('PATH', 'не установлена')[:200]}...</li>
        </ul>
    </div>
    
    <div class="error">
        <h3>Ошибка импорта:</h3>
        <p>{str(e)}</p>
    </div>
    
    <div class="info">
        <h3>Попытка импорта модулей:</h3>
        <ul>
        """
        
        modules_to_test = ['fastapi', 'uvicorn', 'jinja2', 'aiofiles', 'main']
        for module in modules_to_test:
            try:
                __import__(module)
                response_body += f"<li class='success'>✓ {module} - успешно</li>"
            except ImportError as mod_error:
                response_body += f"<li class='error'>✗ {module} - ошибка: {str(mod_error)}</li>"
        
        response_body += """
        </ul>
    </div>
    
</body>
</html>
        """
        
        return [response_body.encode('utf-8')]

# Для локального тестирования
if __name__ == "__main__":
    print("=== Тестирование passenger_wsgi_v2.py ===")
    print(f"Python: {sys.version}")
    print(f"Директория: {os.getcwd()}")
    
    try:
        from main import app
        print("✓ Импорт main.py успешен")
        print(f"✓ Тип приложения: {type(app)}")
        
        # Тестируем WSGI интерфейс
        def test_start_response(status, headers):
            print(f"Status: {status}")
            print(f"Headers: {headers}")
        
        environ = {
            'REQUEST_METHOD': 'GET',
            'PATH_INFO': '/',
            'SERVER_NAME': 'localhost',
            'SERVER_PORT': '80',
            'wsgi.version': (1, 0),
            'wsgi.url_scheme': 'http',
            'wsgi.input': None,
            'wsgi.errors': sys.stderr,
            'wsgi.multithread': False,
            'wsgi.multiprocess': True,
            'wsgi.run_once': False
        }
        
        result = application(environ, test_start_response)
        print("✓ WSGI интерфейс работает")
        
    except Exception as e:
        print(f"✗ Ошибка: {e}")
        import traceback
        traceback.print_exc()