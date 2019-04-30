FROM node:lts-alpine

WORKDIR /server

COPY . /server

RUN npm install

EXPOSE 6900

CMD ["npm", "run", "start"]
