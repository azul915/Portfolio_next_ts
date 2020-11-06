FROM node:15.1.0-buster-slim

COPY ./src/app/package.json /usr/src/app/package.json
COPY ./src/app/yarn.lock /usr/src/app/yarn.lock

WORKDIR /usr/src/app
RUN yarn upgrade && \
    yarn install

CMD ["yarn", "next", "-p", "8083"]