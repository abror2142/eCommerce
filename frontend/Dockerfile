# Stage 1 of 2: Building react app.

FROM node:22-alpine3.19 as build

WORKDIR /home/app/frontend

COPY package*.json .

RUN npm install 

COPY . .

RUN npm run build

# Stage 2 of 2: Configuring nginx to serve the build.

FROM nginx:1.27.1-bookworm

COPY --from=build /home/app/frontend/dist /usr/share/nginx/html
# COPY ./default.conf /etc/nginx/conf.d  # will be used when additional settings available 

ENTRYPOINT ["nginx", "-g", "daemon off;"]
