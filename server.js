/**
 * This file describes the how our webserver should behave,
 * and starts things running.
 * 
 */

// Dependencies
const Koa = require('koa');
const static = require('koa-static');
const router = require('./routes.js');

// Define the http server 
const app = new Koa();

// Tell the server where to serve static files
app.use(static('./static'));

// Tell the server to use our non-static routes from routes.js
app.use(router.routes());

// The port that your server should use 
const port = 5000;

// The function that should be called after the server starts
function afterStart() {
  console.log('Listening on port', port);
}

// Start listening for http requests
app.listen(port, afterStart);
