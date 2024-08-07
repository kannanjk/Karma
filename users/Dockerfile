FROM node:20

WORKDIR /app/users
RUN npm install -g nodemon ts-node typescript
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001

CMD ["npm","start"]