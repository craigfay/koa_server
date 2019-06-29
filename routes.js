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

  const souls = fs.readFileSync('./static/souls.json');
  const json = JSON.parse(souls);
  json.push(name);

  fs.writeFileSync('./static/souls.json', JSON.stringify(json));
  return ctx.body = 'Delicious';
});

module.exports = router;
