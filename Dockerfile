FROM node:16

LABEL maintainer="heart<7362469@qq.com>"

WORKDIR /usr/node



COPY . .

RUN npm config set registry https://registry.npm.taobao.org

RUN npm i

EXPOSE 3363

CMD npm run start:prod

