FROM node:alpine

WORKDIR /usr/app
copy package*.json ./
RUN npm install
RUN npm install nodemon
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
