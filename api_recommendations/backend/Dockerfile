FROM node:14.0

WORKDIR /srv/app

COPY package*.json ;/

RUN npm 

COPY . .

EXPOSE 3001

CMD node app.js