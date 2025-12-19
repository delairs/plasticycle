FROM node:18.1.0-alpine

WORKDIR /home/node/app

COPY . /home/node/app/

RUN npm install

RUN chown -R node:node /home/node/app
USER node

CMD ["sh", "run.sh"]
