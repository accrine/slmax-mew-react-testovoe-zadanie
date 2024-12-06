FROM node:20.15.1 as development

RUN apt-get update && apt-get install libvips-dev -y

WORKDIR /opt/

COPY package.json .
COPY package-lock.json .

ENV NODE_ENV development

ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install

WORKDIR /opt/app

COPY . .
