FROM node:alpine

WORKDIR /app/users
RUN npm install -g nodemon
COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "start" ]