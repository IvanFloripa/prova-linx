FROM node:14.0

WORKDIR /srv/app

COPY package*.json ;/

RUN npm i

RUN npm install express --save

COPY . .

EXPOSE 3000

CMD node app.js