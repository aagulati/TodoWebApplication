# TodoWebApplication

# run the application (docker compose runs the frontend, backend and postgres)
docker-compose up --build

# perform migrations on the python container
python manage.py migrate

# backend project opens on the admin page, create a super user to access with user credentials (eg. id: admin , password: admin)
python manage.py createsuperuser
