.DEFAULT_GOAL:=help
.PHONY: help install develop start build clean

DOCKER_TAG = latest

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install Node dependencies
	@rm -rf node_modules && \
	docker create --cidfile .cidfile -w /app node:alpine npm install && \
	docker cp -a package.json $$(cat .cidfile):/app/package.json && \
	docker cp -a package-lock.json $$(cat .cidfile):/app/package-lock.json && \
	docker start -a $$(cat .cidfile) && \
	docker cp -a $$(cat .cidfile):/app/node_modules/ . && \
	docker rm $$(cat .cidfile) ; \
	rm .cidfile

start: ## Start development environment
	@docker run --rm -u node -v $$(pwd):/app -w /app -p 8000:8000 node:alpine npm start -- -H 0.0.0.0

build: clean ## Build application
	@docker create --cidfile .cidfile -w /app node:alpine npm run build && \
	docker cp -a . $$(cat .cidfile):/app/. && \
	docker start -a $$(cat .cidfile) && \
	docker cp -a $$(cat .cidfile):/app/public . && \
	docker rm $$(cat .cidfile) ; \
	rm .cidfile

clean: ## Remove .cache and public folder
	@rm -rf .cache && \
	rm -rf public

build_docker_image: ## Build nginx docker image
	@docker build -f docker/Dockerfile -t aweng-media-nginx:$(DOCKER_TAG) .

save_docker_image: ## Save nginx docker image as tar.gz file
	@docker save aweng-media-nginx:$(DOCKER_TAG) | gzip > aweng-media-nginx.tar.gz