FROM node:16

WORKDIR /portfolio/
COPY . /portfolio/

RUN yarn install
RUN yarn build
CMD yarn start
