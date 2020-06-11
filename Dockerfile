FROM node:alpine3.11

COPY package.json .

RUN npm install

COPY src src

RUN ls