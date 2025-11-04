# Django backend for portfolio

This folder contains a minimal Django + DRF backend for the portfolio. It provides two resources:

- /api/projects/ (GET) - list projects
- /api/contacts/ (POST) - submit a contact message

Quick start (Windows PowerShell):

```powershell
# 1) Create and activate a virtualenv
python -m venv venv; .\venv\Scripts\Activate.ps1

# 2) Install requirements
pip install -r requirements.txt

# 3) Copy .env example and update DB creds
copy .env.example .env
# Edit .env

# 4) Run migrations and start dev server
python manage.py migrate
python manage.py runserver
```

Notes:

- The default DB engine in `settings.py` is set to MySQL. For quick local dev you can switch to SQLite by modifying `DATABASES` in `portfolio_backend/settings.py`.
- On Windows, installing `mysqlclient` may require Visual C++ build tools; `pymysql` is included as an alternative (add `pymysql.install_as_MySQLdb()` in `settings.py` if you prefer it).
