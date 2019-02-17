# Use Node
FROM node:10-alpine

RUN apk update
RUN apk add --no-cache \
    libtool \
    mesa-gl \
    autoconf \
    automake \
    bash \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Setup app working directory
WORKDIR /home/node/app

# Bundle app source
COPY --chown=node:node . .

USER node

# Install app dependencies
RUN npm install
RUN npm run heroku-postbuild

# Start app
CMD ["npm", "run", "start:prod"]