FROM node:latest

WORKDIR /usr/app

COPY . .

RUN npm ci

RUN npm run build

ENV NODE_ENV production