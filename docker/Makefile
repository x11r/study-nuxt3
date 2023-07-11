
include ./.env

build:
	docker-compose stop
	docker-compose up -d --build

restart:
	docker-compose stop
	docker-compose up -d

stop:
	docker-compose stop
up:
	docker-compose up -d

web:
	docker-compose exec web /bin/sh
