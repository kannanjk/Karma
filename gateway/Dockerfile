FROM node:alpine

WORKDIR /app/gateway 
COPY  package.json package-lock.json ./
RUN npm install
RUN npm install -g nodemon express-http-proxy ts-node typescript
COPY . .
EXPOSE 3005

CMD ["npm","start"] 