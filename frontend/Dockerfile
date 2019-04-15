FROM node:10-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install && \
  npm run build

FROM nginx

COPY --from=0 /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
