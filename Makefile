.DEFAULT_GOAL:=help
.PHONY: build build_ansible_image build_nginx_image clean deploy help install save_nginx_image start check_release_env

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

check_release_env:
ifndef RELEASE
	$(error Environment variable [RELEASE] is undefined!)
endif

install_frontend: ## Install frontend dependencies
	@rm -rf ./frontend/node_modules && \
	docker create --cidfile ./frontend/.cidfile -w /app node:alpine npm install $(ARGS) && \
	docker cp -a ./frontend/package.json $$(cat ./frontend/.cidfile):/app/package.json && \
	docker cp -a ./frontend/package-lock.json $$(cat ./frontend/.cidfile):/app/package-lock.json && \
	docker start -a $$(cat ./frontend/.cidfile) && \
	docker cp -a $$(cat ./frontend/.cidfile):/app/node_modules/ ./frontend/. && \
	docker cp -a $$(cat ./frontend/.cidfile):/app/package.json ./frontend/package.json && \
	docker cp -a $$(cat ./frontend/.cidfile):/app/package-lock.json ./frontend/package-lock.json && \
	docker rm $$(cat ./frontend/.cidfile) ; \
	rm ./frontend/.cidfile

start_frontend: ## Start frontend development environment
	@docker run --rm -u node -v $$(pwd)/frontend:/app -w /app -p 8000:8000 node:alpine npm start -- -H 0.0.0.0

build_frontend: clean_frontend ## Build frontend application
	@docker create --cidfile ./frontend/.cidfile -w /app node:alpine npm run build && \
	docker cp -a ./frontend/. $$(cat ./frontend/.cidfile):/app/. && \
	docker start -a $$(cat ./frontend/.cidfile) && \
	docker cp -a $$(cat ./frontend/.cidfile):/app/public ./frontend/. && \
	docker rm $$(cat ./frontend/.cidfile) ; \
	rm ./frontend/.cidfile

clean_frontend: ## Remove frontend .cache and public folder
	@rm -rf ./frontend/.cache && \
	rm -rf ./frontend/public

build_nginx_image: check_release_env ## Build nginx docker image
	@docker build -f docker/nginx/Dockerfile -t aweng-media-nginx:$${RELEASE} .

save_nginx_image: check_release_env ## Save nginx docker image as tar.gz file
	@docker save aweng-media-nginx:$${RELEASE} | gzip > aweng-media-nginx.tar.gz

build_php_image: check_release_env ## Build nginx docker image
	@docker build -f docker/php/Dockerfile -t aweng-media-php:$${RELEASE} .

save_php_image: check_release_env ## Save nginx docker image as tar.gz file
	@docker save aweng-media-php:$${RELEASE} | gzip > aweng-media-php.tar.gz

build_ansible_image: ## Build ansible docker image
	@docker build -t ansible docker/ansible

deploy: check_release_env ## Deploy application
	@docker run --rm -v $$(pwd):/app -e RELEASE=$${RELEASE} ansible ansible-playbook ansible/playbook.yml

decrypt_vault: build_ansible_image ## Decrypt secrets
	@docker create --cidfile .cidfile -w /app ansible ansible-vault decrypt aweng.yml main.yml id_rsa && \
	docker cp -a ansible/host_vars/aweng.yml $$(cat .cidfile):/app/. && \
	docker cp -a ansible/roles/deployment/vars/main.yml $$(cat .cidfile):/app/. && \
	docker cp -a ansible/roles/provision/files/id_rsa $$(cat .cidfile):/app/. && \
	docker cp -a ansible.cfg $$(cat .cidfile):/app/. && \
	docker cp -a .vault-pass $$(cat .cidfile):/app/. && \
	docker start -a $$(cat .cidfile) && \
	docker cp -a $$(cat .cidfile):/app/aweng.yml ansible/host_vars/aweng.yml && \
	docker cp -a $$(cat .cidfile):/app/main.yml ansible/roles/deployment/vars/main.yml && \
	docker cp -a $$(cat .cidfile):/app/id_rsa ansible/roles/provision/files/id_rsa && \
	docker rm $$(cat .cidfile) ; \
	rm .cidfile

encrypt_vault: build_ansible_image ## Encrypt secrets
	@docker create --cidfile .cidfile -w /app ansible ansible-vault encrypt aweng.yml main.yml id_rsa && \
	docker cp -a ansible/host_vars/aweng.yml $$(cat .cidfile):/app/. && \
	docker cp -a ansible/roles/deployment/vars/main.yml $$(cat .cidfile):/app/. && \
	docker cp -a ansible/roles/provision/files/id_rsa $$(cat .cidfile):/app/. && \
	docker cp -a ansible.cfg $$(cat .cidfile):/app/. && \
	docker cp -a .vault-pass $$(cat .cidfile):/app/. && \
	docker start -a $$(cat .cidfile) && \
	docker cp -a $$(cat .cidfile):/app/aweng.yml ansible/host_vars/aweng.yml && \
	docker cp -a $$(cat .cidfile):/app/main.yml ansible/roles/deployment/vars/main.yml && \
	docker cp -a $$(cat .cidfile):/app/id_rsa ansible/roles/provision/files/id_rsa && \
	docker rm $$(cat .cidfile) ; \
	rm .cidfile