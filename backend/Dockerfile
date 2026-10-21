
# Python base image
FROM python:3.12-slim

# Python environment settings
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Application working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy Django application
COPY . .

# Create an unprivileged user
RUN useradd --create-home appuser && \
    chown -R appuser:appuser /app

USER appuser

# Django application port
EXPOSE 8000

# Start Django with Gunicorn
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
