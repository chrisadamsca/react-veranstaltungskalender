FROM node:6-alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

CMD ["npm", "start"]
