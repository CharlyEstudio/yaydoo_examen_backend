FROM node:12.16
EXPOSE 3001
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

ENTRYPOINT npm run mg:r && npm run seed:run && npm run start:prod