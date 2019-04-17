# Build Stage
FROM node as build

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

# Install app dependencies
COPY package*.json ./
COPY internals ./internals

RUN npm install

# Bundle app source

COPY . .

# Build app
RUN npm run build

# Nginx Stage
FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /home/node/app/build /usr/share/nginx/html
