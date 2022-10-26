nerdctl build -t ekamoto/app:1.0 -f DockerfileApp .
nerdctl build -t ekamoto/mysql:1.0 -f DockerfileMysql .
nerdctl compose --env-file .env config
nerdctl compose up

read