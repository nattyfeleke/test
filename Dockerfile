FROM node:16

WORKDIR /test
COPY package.json .
RUN npm install
COPY . .
CMD npm start