FROM php:8.0-fpm-alpine AS dev

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

FROM php:8.0-fpm-alpine AS prd

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY backend/src/. /app/src/
COPY backend/vendor/. /app/vendor/