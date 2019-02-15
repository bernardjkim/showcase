# Use Node
FROM node:10-alpine

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