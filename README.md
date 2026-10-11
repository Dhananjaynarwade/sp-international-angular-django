# S-P International — Angular + Django Starter

A modern business/import-export website starter inspired by the visual structure of corporate trading websites.

## Stack
- Angular 18+ style standalone components
- SCSS
- AOS scroll animations
- Django 5
- Django REST Framework
- SQLite (easy local setup)

## 1. Run Django backend

Open CMD / PowerShell:

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_products
python manage.py runserver 0.0.0.0:8000
```

API:
- http://127.0.0.1:8000/api/products/
- http://127.0.0.1:8000/api/quotes/
- http://127.0.0.1:8000/admin/

Create admin user:
```bash
python manage.py createsuperuser
```

## 2. Run Angular frontend

Open another CMD / PowerShell:

```bash
cd frontend
npm install
npm start
```

Open:
http://localhost:4200

## Notes
- Replace sample text, logo and product names with your real company information.
- Product images currently use remote Unsplash URLs.
- Angular calls Django at `http://127.0.0.1:8000/api`.

## 🚀 How to Run the Project Locally

This project uses **Django (Backend)** and **Angular (Frontend)**. Both servers must run in separate terminals.

### Step 1 — Start Django Backend

Open **CMD Terminal 1** and navigate to the backend folder:

```cmd
cd /d "D:\Dhananjay AWS\Kokates website\sp-international-angular-django\backend"
```

Start the Django development server:

```bash
python manage.py runserver
```

Once the server starts, open:

- **Django Admin:** http://127.0.0.1:8000/admin/
- **Django API:** http://127.0.0.1:8000/api/

**Keep Terminal 1 open.**

### Step 2 — Start Angular Frontend

Open a **new CMD Terminal 2** and navigate to the frontend folder:

```cmd
cd /d "D:\Dhananjay AWS\Kokates website\sp-international-angular-django\frontend"
```

Start the Angular development server:

```bash
ng serve --open
```

The Angular website will open automatically at:

**http://localhost:4200/**

**Keep Terminal 2 open.**

### Step 3 — Stop the Servers

To stop either server, go to its terminal and press:

`Ctrl + C`

### Local Development URLs

| Service | URL |
|---|---|
| Angular Frontend | http://localhost:4200/ |
| Django Backend | http://127.0.0.1:8000/ |
| Django Admin | http://127.0.0.1:8000/admin/ |
| Django API | http://127.0.0.1:8000/api/ |

**Note:** The `/api/` URL works only if a matching API endpoint is configured. The Django root URL may show a 404 because no homepage route is defined.