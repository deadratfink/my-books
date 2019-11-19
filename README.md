# my-books (v1.0.0)

A personal book administration web application.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## TOC

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
  - [1. Install Node.js](#1-install-nodejs)
  - [2. Install Brew](#2-install-brew)
  - [3. Install Yarn](#3-install-yarn)
  - [4. Install Dependencies](#4-install-dependencies)
- [Start Application](#start-application)
- [Development](#development)
  - [Development Server Usage](#development-server-usage)
  - [Run the Linter](#run-the-linter)
  - [Execute Tests](#execute-tests)
  - [Create Readme](#create-readme)
- [Further information](#further-information)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Introduction

This repository provides a small personal book adminstration application which provides the books in some
kind of register. Features are:

- Books are sorted alphabetically in the book register
- An opened register tab shows a book card (or more) which in turn can be opened to show the book details in a dialog
    - Here you can also follow download links of the book (if they are provided)
- Filtering by (predefined) subjects
- Create new book(s)
- Edit existing book(s) and all its properties (title, authors etc.) in a dialog form
- Delete existing book(s)
- The application UI is mobile devices capable

## Prerequisites

Pls ensure that the following requirements are fulfilled before you go ahead.

### 1. Install Node.js

To use node.js it is recomended to have [nvm](https://github.com/nvm-sh/nvm) installed. Afterwards, you can
install node, e.g.:

```text
$ nvm install 10
```

### 2. Install Brew

To install yarn you need [brew](https://brew.sh/) to be installed before.

### 3. Install Yarn

Install [yarn](https://yarnpkg.com/en/docs/install#mac-stable).

### 4. Install Dependencies

```text
$ make install
```

## Start Application

Start the application including development server with:

```text
$ make start
```

on http://localhost:3000. Now you adminster your books.
## Development

You can start [Storybook](https://storybook.js.org/):

```text
$ make storybook
```

### Development Server Usage

Fore example:

| Endpoint                     | Result                                              |
|------------------------------|-----------------------------------------------------|
| /books?subjects_like=Fiction | Lists all books that contain "Fiction" as a subject |
| /subjects                    | Lists all available subjects                        |

---

More info about API usage can be found at the [json-server
repo](https://github.com/typicode/json-server).

### Run the Linter

```text
$ make lint
```

### Execute Tests

```text
$ make test
```

### Create Readme

```text
$ make readme
```


## Further information

- [Module Details](./PACKAGE.md)

- [Api Reference](./API.md)

- [Makefile Reference](./MAKE.md)

- [Changelog](./CHANGELOG.md)

- [License](./LICENSE.md)

