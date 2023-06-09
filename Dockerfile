##############
# BuildStage #
##############

# pull offical base image
FROM node:16.16.0-alpine as build-stage


# set working dir
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

###########
#  FINAL  #
###########

# base image
FROM nginx:1.19.4-alpine as production-stage

# copy static files
COPY --from=build-stage /app/build /usr/share/nginx/html
# copy nginx config
COPY ./conf/nginx.conf /etc/nginx/nginx.conf
# export port
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]