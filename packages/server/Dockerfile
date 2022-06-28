FROM node:16

LABEL author hieudoanm

COPY . .

RUN npm ci && npm run build

FROM node:16-alpine

USER node

EXPOSE $PORT

COPY --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/package-lock.json ./

RUN npm ci --production

CMD ["yarn", "start"]
