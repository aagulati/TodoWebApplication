# Backend asset builder
FROM python:3.8.1-slim-buster

RUN mkdir /app
WORKDIR /app/
RUN apt-get clean
RUN apt-get update
RUN apt-get install python3-dev -y
RUN apt-get install -y libpq-dev
RUN apt-get install -y gcc 
RUN pip install Django
RUN pip install djangorestframework
RUN pip install django-cors-headers
RUN pip install psycopg2
RUN pip install django-test-tools

COPY . /app/

EXPOSE 8000

# RUN docker run build
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"] 

