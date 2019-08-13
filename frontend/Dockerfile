#Create image for React server
FROM node:latest
RUN mkdir -p /var/node
COPY package*.json /var/node/
WORKDIR /var/node
RUN npm install
COPY . /var/node
