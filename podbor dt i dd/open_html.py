import webbrowser
import os

# Получаем путь к текущей директории
current_dir = os.path.dirname(os.path.abspath(__file__))

# Находим HTML файл
for f in os.listdir(current_dir):
    if f.endswith('.html'):
        html_path = os.path.join(current_dir, f)
        file_url = 'file:///' + html_path.replace('\\', '/')
        print(f"Opening: {file_url}")
        webbrowser.open(file_url)
        break

