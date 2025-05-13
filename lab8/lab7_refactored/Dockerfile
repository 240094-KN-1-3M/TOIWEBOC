FROM node:current

WORKDIR /home/node

COPY package.json package-lock.json /home/node/
RUN npm install --legacy-peer-deps

COPY . /home/node/

EXPOSE 3000
CMD ["npm", "run", "dev"]
