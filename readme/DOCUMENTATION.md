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
