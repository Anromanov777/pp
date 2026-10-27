
Настройка интерпретатора Python после клонирования:
File → Settings → Project → Python Interpreter, → Add → Existing environment
Затем открыть терминал из папки Lingvo

Установить все зависимости из requirements.txt:
pip install -r requirements.txt

Создать виртуальное окружение (если его ещё нет):
python -m venv .venv

 Активировать его:
.venv\Scripts\activate

Установить Джанго:
pip install django

Проверить:
python -m django --version

Перейти в папку проекта:
cd Lingvo

Запустить сервер:
Python manage.py runserver

Записать в файл список всех установленных пакетов:
pip freeze > requirements.txt


