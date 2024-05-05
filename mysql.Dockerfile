FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=estate_scout

COPY /src/main/resources/db.sql .
EXPOSE 3306

