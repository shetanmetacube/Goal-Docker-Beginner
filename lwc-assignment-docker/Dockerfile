FROM node:16.15.0
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3001
CMD ["npm","run","watch"]

