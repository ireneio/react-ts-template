FROM node:14

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .

RUN npm install && npm run build

WORKDIR /usr/src/app/server
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
