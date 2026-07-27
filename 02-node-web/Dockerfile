FROM node:26-alpine

WORKDIR /app

# Importante para la cache
COPY  package*.json ./

RUN npm ci --omit=dev

# source destination
COPY . .

EXPOSE 3000

USER node

CMD ["node", "server.js"]
