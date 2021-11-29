Prerequisites

1. Docker installed - [docker download]  
2. Folder with our app
3. File named Dockerfile inside our app folder

```dockerfile
# Create image from the Docker Hub
# https://hub.docker.com/_/node
FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

# Bundle (copy) app source
COPY . /app

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
# it does nothing (without adding command to 'docker run' '-p 3000:<port-on-local-host>) because by default docker container cannot be accessed from our machine nor internet
EXPOSE 3000

# Last but not least, define the command to run your app using CMD which defines your runtime. 
# check in your package.json for other commands:
CMD [ "npm", "start" ]
```
  
now:  
```terminal
cd path-to-our-app
# -t command is for naming our image container, without it our container would be named with some hash string
docker build -t our-app-image-name . 
#
docker run -d --name app-name our-app-image-name
```
usefull commands  
```terminal
docker image ls
docker rm image-container-to-be-removed
```



Thanks! https://www.youtube.com/watch?v=3xDAU5cvi5E
