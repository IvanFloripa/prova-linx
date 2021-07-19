FROM node:14.0

WORKDIR /srv/app

COPY package*.json ;/
RUN npm install axios --save
RUN npm install express --save
RUN npm install -g nodemon 


COPY . .

EXPOSE 3001

CMD nodemon app.js