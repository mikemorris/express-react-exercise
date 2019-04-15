FROM node:10-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

ENV NODE_ENV production

RUN npm install

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
