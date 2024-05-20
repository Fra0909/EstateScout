docker rm -vf $(docker ps -aq)
docker rmi -f $(docker images -aq)

docker network create estate-scout-network

docker build -t estate-scout-mysql -f mysql.Dockerfile .

docker run -d -p 3306:3306 --network estate-scout-network --name estate-scout-mysql estate-scout-mysql

docker build -t estate-scout-backend .

timeout /t 5 > nul

docker run -d -p 8080:8080 --network estate-scout-network --name estate-scout-backend estate-scout-backend

cd .\frontend\estate-scout\

ng serve --watch
