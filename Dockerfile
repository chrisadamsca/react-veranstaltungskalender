FROM node:6-alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install
RUN npm rebuild node-sass --force

EXPOSE 3000

CMD ["npm", "run", "dev"]
