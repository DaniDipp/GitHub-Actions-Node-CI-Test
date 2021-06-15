FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY ./dist ./dist

CMD [ "npm", "run", "start" ]

EXPOSE 80
