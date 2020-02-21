FROM node:8-stretch

ENV NPM_CONFIG_LOGLEVEL=warn

RUN mkdir /app
WORKDIR /app/
COPY package.json yarn.lock /app/

RUN yarn && \
    yarn cache clean && \
    true
RUN npm install axios
RUN npm install

COPY . /app/

EXPOSE 3000

# RUN npm run build
CMD ["npm", "start"]