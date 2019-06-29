# About
This is an educational demo of a basic full stack application using Node and [Koa](https://koajs.com/)

## How to create this project yourself

### Prerequisite
* Have [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm), and [git](https://git-scm.com/downloads) installed.
* You can test whether you have them like so:
  * `node --version`
  * `npm --version`
  * `git --version`

### Setup
* Make a new folder: `mkdir koa_server`
* Navigate into the folder: `cd koa_server`
* Create the folder a git repo: `git init`
* Create a new *package.json*: `npm init -y`

### Install Dependencies
* Install koa: `npm install koa`
* Install koa-static: `npm install koa-static`
* Install koa-router: `npm install koa-router`

### Make some files
* Make a blank javascript file: `touch server.js`
* Make a blank javascript file: `touch routes.js`
* Create a folder for static files: `mkdir static`
* Make a few static files:
  * `touch static/index.html`
  * `touch static/main.css`
  * `touch static/main.js`
  * `touch static/souls.json`
* Fill out all the files way they are in this repo

### Get things fired up
* Start webserver: `node server.js`
* Use a browser to go to the address `localhost:5000`