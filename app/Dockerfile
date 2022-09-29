FROM node:12-alpine

WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "start"]