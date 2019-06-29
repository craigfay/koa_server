/**
 * This file describes what should happen when
 * a requester goes to the url `/add/:name`, where
 * `:name` is an arbitary string.
 * 
 */

// Dependencies
const Router = require('koa-router');
const fs = require('fs');

// Define non-static url routes
const router = new Router();
router.get('/add/:name', function(ctx) {
  const name = ctx.params.name;
  
  if (!name) {
    ctx.status = 400;
    return ctx.body = 'Invalid Request'
  }

  // Read and update our user data
  const souls = fs.readFileSync('./static/souls.json');
  const json = JSON.parse(souls);
  fs.writeFileSync('./static/souls.json', JSON.stringify(json));

  // Respond to the requester
  return ctx.body = 'Delicious';
});

module.exports = router;
