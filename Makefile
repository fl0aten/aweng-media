.DEFAULT_GOAL:=help
.PHONY: build build_ansible_image build_nginx_image clean deploy help install save_nginx_image start check_release_env

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

check_release_env:
ifndef RELEASE
	$(error Environment variable [RELEASE] is undefined!)
endif

install: ## Install Node dependencies
	@rm -rf node_modules && \
	docker create --cidfile .cidfile -w /app node:alpine npm install $(ARGS) && \
	docker cp -a package.json $$(cat .cidfile):/app/package.json && \
	docker cp -a package-lock.json $$(cat .cidfile):/app/package-lock.json && \
	docker start -a $$(cat .cidfile) && \
	docker cp -a $$(cat .cidfile):/app/node_modules/ . && \
	docker cp -a $$(cat .cidfile):/app/package.json ./package.json && \
	docker cp -a $$(cat .cidfile):/app/package-lock.json ./package-lock.json && \
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

build_nginx_image: check_release_env ## Build nginx docker image
	@docker build -f docker/nginx/Dockerfile -t aweng-media-nginx:$${RELEASE} .

save_nginx_image: check_release_env ## Save nginx docker image as tar.gz file
	@docker save aweng-media-nginx:$${RELEASE} | gzip > aweng-media-nginx.tar.gz

build_ansible_image: ## Build ansible docker image
	@docker build -t ansible docker/ansible

deploy: check_release_env ## Deploy application
	@docker run --rm -v $$(pwd):/app -e RELEASE=$${RELEASE} ansible ansible-playbook ansible/playbook.yml