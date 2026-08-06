FROM node:18-alpine

# Instalasi FFmpeg di dalam sistem container Alpine Linux
RUN apk add --no-cache ffmpeg

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4005

CMD ["node", "dist/main.js"]
