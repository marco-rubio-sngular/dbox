FROM node:alpine as dependencies

WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@10.2.5 && npm install
COPY . .

EXPOSE 3000

CMD npm run dev
