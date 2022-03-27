FROM node:14.19-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run mg:r
RUN npm run seed:config
RUN npm run seed:run
RUN npm run build
ENTRYPOINT npm run start:prod