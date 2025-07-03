FROM node:18-alpine AS builder


WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


# so it is BUILD phase 

#NOW SECOND STAGE of the RUN phase for ngnix 



FROM nginx

# copy something from different phase

COPY --from=builder /app/build /usr/share/nginx/html


