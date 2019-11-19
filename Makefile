.PHONY: test clean readme build

.DEFAULT_GOAL:=help

help: ## Prints the help about targets.
	@printf "Usage:    make [\033[34mtarget\033[0m]\n"
	@printf "Default:  \033[34m%s\033[0m\n" $(.DEFAULT_GOAL)
	@printf "Targets:\n"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf " \033[34m%-14s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sort

install: ## Install all dependencies.
	@printf "Install all dependencies...\n"
	yarn install

clean: ## Removes generated files in folders ./node_modules, ./coverage and log files.
	@printf "Removing ./node_modules, ./coverage and log files...\n"
	rm -rf node_modules
	rm -rf coverage
	rm -f yarn-error.log
	rm -f npm-debug.log

clean-install: clean install ## Removes generated files in folders ./node_modules and ./coverage and makes a fresh install.

outdated: ## Checks outdated dependencies.
	@printf "Checking outdated dependencies..."
	yarn outdated

outdated-fix: ## Updates outdated dependencies.
	@printf "Checking outdated dependencies..."
	yarn outdated:fix

start: ## Starts the React and the API development server.
	@printf "Starting the the React and the API development server...\n"
	yarn start

build: ## Builds application.
	@printf "Building application...\n"
	yarn build

eject: ## Ejects react app! USE WITH CAUTION!
	@printf "Ejecting react app...\n"
	yarn eject

readme: ## Creates the README.md.
	@printf "Creating the README.md...\n"
	yarn readme

lint: ## Starts the linter.
	@printf "Starting the linter...\n"
	yarn lint

lint-fix: ## Starts the linter with fix.
	@printf "Starting the linter with fix...\n"
	yarn lint:fix

test: ## Starts the tests.
	@printf "Starting the tests...\n"
	yarn test

test-watch: ## Starts the tests in watch mode.
	@printf "Starting the tests in watch mode...\n"
	yarn test:watch

test-clear-jest-cache: ## Clears Jest cache.
	@printf "Clearing Jest cache...\n"
	yarn test:clear-jest-cache

storybook: ## Starts storybook.
	@printf "Starting storybook...\n"
	yarn storybook
