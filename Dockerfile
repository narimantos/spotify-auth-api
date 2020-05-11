FROM node:12.13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --global cross-env
RUN npm install

COPY . .

EXPOSE 4040 
EXPOSE 9229

CMD [ "yarn", "start" ]