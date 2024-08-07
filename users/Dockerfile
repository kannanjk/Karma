FROM node:alpine

WORKDIR /app/users 
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY /prisma ./prisma
RUN npx prisma generate --schema=./prisma/schema.prisma
RUN npm install -g nodemon cors ts-node typescript
COPY . .
EXPOSE 3001

CMD ["npm","start"]