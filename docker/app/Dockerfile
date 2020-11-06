FROM node:15.1.0-alpine3.10

COPY ./src/app/package.json /usr/src/app/package.json
COPY ./src/app/yarn.lock /usr/src/app/yarn.lock

WORKDIR /usr/src/app
RUN yarn install

CMD ["yarn", "dev"]