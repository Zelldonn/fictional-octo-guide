FROM node:16.14.2-alpine3.15

WORKDIR /frontend

COPY package.json /frontend

COPY yarn.lock /frontend

RUN yarn

COPY . /frontend

EXPOSE 3000

CMD ["yarn","start"]!
