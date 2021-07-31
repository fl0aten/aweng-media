FROM php:8.0-fpm-alpine AS dev

COPY --from=composer /usr/bin/composer /usr/bin/composer

FROM php:8.0-fpm-alpine AS prd

COPY backend/src/. /app/src/
COPY backend/vendor/. /app/vendor/s