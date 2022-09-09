const Koa = require('koa');
const router = require('./router');
const app = new Koa();
const PORT = 3000;

router.get('/', ctx => {
  ctx.body = 'Hello World';
});

// 通过app.use启用路由,其他中间件也由app.use启用
app.use(router.routes(), router.allowedMethods());

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
});