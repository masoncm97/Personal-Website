FROM node:16.13.1-alpine

WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@5.0.0 -g 

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "start"]