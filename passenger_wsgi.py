#!/usr/bin/python3
# -*- coding: utf-8 -*-

import sys
import os

# Путь к интерпретатору Python в виртуальном окружении на хостинге reg.ru
INTERP = "/var/www/u3265822/data/fastenv/bin/python"

# Проверяем и переключаемся на виртуальное окружение, если необходимо
if sys.executable != INTERP and os.path.exists(INTERP):
    os.execl(INTERP, INTERP, *sys.argv)

# Добавляем текущую директорию в путь Python
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.insert(0, current_dir)

# Устанавливаем переменные окружения
os.environ.setdefault('PYTHONIOENCODING', 'utf-8')

try:
    # Импортируем FastAPI приложение из main.py
    from main import app as application
    
    # Проверяем, что приложение загружено корректно
    if application is None:
        raise ImportError("FastAPI application is None")
        
except Exception as e:
    # Создаем диагностическое WSGI приложение в случае ошибки
    def application(environ, start_response):
        status = '500 Internal Server Error'
        headers = [('Content-type', 'text/html; charset=utf-8')]
        start_response(status, headers)
        
        error_html = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Ошибка загрузки FastAPI - reg.ru</title>
    <style>
        body {{ font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }}
        .container {{ background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
        .error {{ color: #d32f2f; background: #ffebee; padding: 15px; border-radius: 4px; margin: 10px 0; }}
        .info {{ background: #e3f2fd; padding: 15px; border-radius: 4px; margin: 10px 0; }}
        .success {{ color: #388e3c; }}
        h1 {{ color: #1976d2; }}
        ul {{ margin: 10px 0; padding-left: 20px; }}
        li {{ margin: 5px 0; }}
        code {{ background: #f5f5f5; padding: 2px 4px; border-radius: 3px; }}
    </style>
</head>
<body>
    <div class="container">
        <h1>🚨 Ошибка загрузки FastAPI приложения</h1>
        
        <div class="error">
            <h3>Описание ошибки:</h3>
            <p><strong>{type(e).__name__}:</strong> {str(e)}</p>
        </div>
        
        <div class="info">
            <h3>Системная информация:</h3>
            <ul>
                <li><strong>Python версия:</strong> {sys.version}</li>
                <li><strong>Исполняемый файл:</strong> {sys.executable}</li>
                <li><strong>Ожидаемый интерпретатор:</strong> {INTERP}</li>
                <li><strong>Текущая директория:</strong> {os.getcwd()}</li>
                <li><strong>Директория скрипта:</strong> {current_dir}</li>
            </ul>
        </div>
        
        <div class="info">
            <h3>Python Path:</h3>
            <ul>
        """
        
        for i, path in enumerate(sys.path[:10]):  # Показываем первые 10 путей
            error_html += f"<li>{path}</li>"
        
        if len(sys.path) > 10:
            error_html += f"<li>... и еще {len(sys.path) - 10} путей</li>"
            
        error_html += """
            </ul>
        </div>
        
        <div class="info">
            <h3>Содержимое директории:</h3>
            <ul>
        """
        
        try:
            files = sorted(os.listdir('.'))
            for file in files[:20]:  # Показываем первые 20 файлов
                if os.path.isfile(file):
                    size = os.path.getsize(file)
                    error_html += f"<li>📄 {file} ({size} байт)</li>"
                else:
                    error_html += f"<li>📁 {file}/</li>"
            
            if len(files) > 20:
                error_html += f"<li>... и еще {len(files) - 20} файлов</li>"
                
        except Exception as list_error:
            error_html += f"<li class='error'>Ошибка чтения директории: {str(list_error)}</li>"
            
        error_html += """
            </ul>
        </div>
        
        <div class="info">
            <h3>Проверка модулей:</h3>
            <ul>
        """
        
        modules_to_check = ['fastapi', 'uvicorn', 'jinja2', 'aiofiles', 'main']
        for module in modules_to_check:
            try:
                __import__(module)
                error_html += f"<li class='success'>✅ {module} - доступен</li>"
            except ImportError as mod_error:
                error_html += f"<li>❌ {module} - недоступен: {str(mod_error)}</li>"
        
        error_html += f"""
            </ul>
        </div>
        
        <div class="info">
            <h3>Рекомендации по устранению:</h3>
            <ol>
                <li>Убедитесь, что виртуальное окружение создано по пути: <code>{INTERP}</code></li>
                <li>Проверьте, что все зависимости установлены: <code>pip install -r requirements.txt</code></li>
                <li>Убедитесь, что файл <code>main.py</code> находится в корневой директории</li>
                <li>Проверьте права доступа к файлам и директориям</li>
                <li>Убедитесь, что в панели управления reg.ru включена поддержка Python</li>
            </ol>
        </div>
        
        <div class="info">
            <p><strong>Время генерации:</strong> {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
        </div>
    </div>
</body>
</html>
        """
        
        return [error_html.encode('utf-8')]