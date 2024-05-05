FROM maven:3.8.4-openjdk-11-slim AS build

COPY . /app

WORKDIR /app

RUN mvn clean package -DskipTests

FROM openjdk:11-jre-slim

COPY --from=build /app/target/estate-scout-1.0.jar /app/estate-scout-1.0.jar

EXPOSE 8080

ENV DB_URL=jdbc:mysql://localhost:3306/estate_scout?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true

CMD ["java", "-jar", "/app/estate-scout-1.0.jar"]


