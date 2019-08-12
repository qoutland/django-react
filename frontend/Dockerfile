#Create image for React server
FROM node:latest
RUN mkdir -p /var/node
ADD . /var/node/
WORKDIR /var/node
RUN npm install
EXPOSE 3000
CMD npm start