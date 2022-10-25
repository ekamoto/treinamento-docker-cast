docker build -t ekamoto/app:1.0 -f DockerfileApp .
docker build -t ekamoto/mysql:1.0 -f DockerfileMysql .
docker-compose --env-file .env config
docker-compose up

read