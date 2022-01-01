FROM node:17-alpine

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn

COPY . .

ENV port=3002
EXPOSE 3002

CMD ["yarn", "start"]