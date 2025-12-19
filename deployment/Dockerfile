FROM node:18.1.0-alpine

WORKDIR /home/node/app

COPY . /home/node/app/


RUN chown -R node:node /home/node/app
USER node

RUN npm install
RUN npm run dev
