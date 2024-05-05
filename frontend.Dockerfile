# Stage 1: Build the Angular application
FROM node:18 AS build

COPY . .

RUN npm i

RUN npm install -g @angular/cli

WORKDIR frontend/estate-scout

CMD npm install

EXPOSE 4200

#CMD ng serve
CMD yarn run build
CMD yarn ng serve
