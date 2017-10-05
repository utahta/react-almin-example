
all: install build

install:
	@npm i

build:
	@node_modules/.bin/webpack

run:
	@node_modules/.bin/webpack-dev-server --hot --content-base public/ --open

