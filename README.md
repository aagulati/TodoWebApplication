# TodoWebApplication

# run the application (docker compose runs the frontend, backend and postgres)
docker-compose up --build

# perform migrations on the python container
docker exec -ti <web container id> bash
python manage.py migrate

# backend project opens on the admin page, create a super user to access with user credentials (eg. id: admin , password: admin)
echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', '', 'admin')" | python manage.py shell

# run the Django test cases
python manage.py test webapp
