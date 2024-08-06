FROM node:alpine

WORKDIR /app/post
COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "start" ]