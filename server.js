var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-router')();

var app = koa();
app.use(serve('.'));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(80);