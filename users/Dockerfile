FROM node:alpine

WORKDIR /app/users
COPY  package.json package-lock.json ./
RUN npm install
COPY /prisma ./prisma
RUN npx prisma generate --schema=./prisma/schema.prisma
RUN npm install -g nodemon ts-node typescript
COPY . .
EXPOSE 3001

CMD ["npm","start"]