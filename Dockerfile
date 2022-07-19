FROM node:16

COPY . /app
WORKDIR /app
RUN npm install
# RUN npm install --dev
# RUN npm install nodemon -g
# CMD nodemon index.js
CMD npm run debug
# CMD bash