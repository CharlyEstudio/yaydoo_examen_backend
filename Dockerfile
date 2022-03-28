FROM ubuntu
# RUN apt-get update && apt install -y nodejs nodejs-doc npm
RUN apt-get update
# RUN apt-get clean all

RUN apt install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs vim

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

ENTRYPOINT npm run mg:r && npm run start:prod