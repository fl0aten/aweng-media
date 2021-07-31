FROM nginx:alpine AS base

FROM base AS dev
COPY docker/nginx/config/dev.conf /etc/nginx/conf.d/default.conf

FROM base AS prd
COPY docker/nginx/config/prd.conf /etc/nginx/conf.d/default.conf
COPY frontend/public/. /usr/share/nginx/html/
