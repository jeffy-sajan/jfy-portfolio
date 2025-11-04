# Personal Portfolio

This is my personal portfolio website built with React and Django.

## Project Structure

- `frontend/` - React frontend built with Vite, TypeScript, and Tailwind CSS
- `backend/` - Django REST API backend

## Quick Start

### Backend Setup (Django)

```powershell
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\Activate.ps1

# Install requirements
pip install -r requirements.txt

# Copy environment file and update it
copy .env.example .env
# Edit .env with your settings

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

### Frontend Setup (React)

```powershell
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
copy .env.example .env
# Set VITE_API_URL in .env to match your backend URL

# Start development server
npm run dev
```

## Features

- Responsive single-page design
- Sections for Home, About, Skills, Projects, Resume, and Contact
- Contact form with email notifications
- Projects showcase with filtering
- Resume download option
- Modern UI with smooth animations

## Technologies Used

### Frontend

- React with TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- Lucide Icons

### Backend

- Django
- Django REST Framework
- MySQL/SQLite3
- CORS Headers for API access
