FROM node:lts-alpine

WORKDIR /server

COPY . /server

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]