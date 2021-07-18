FROM node:12.18.1
WORKDIR /app
COPY package*.json /app/
RUN npm ci 
COPY . /app
EXPOSE 5000

# This is for production, it will run in dev but will be overwritten by
# docker-compose command.
CMD [ "npm", "start"]
