# Use Node
FROM node:alpine

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


WORKDIR /home/node/app

USER node

# Install app dependencies
COPY package*.json ./
COPY internals ./internals

RUN npm install

# Bundle app source
COPY --chown=node:node . .

# Build app
RUN npm run heroku-postbuild

# Start app
CMD ["npm", "run", "start:prod"]