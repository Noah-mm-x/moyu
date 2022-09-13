const Koa = require('koa');
const router = require('./router');
// const { handleResponse } = require('./middleware')
const app = new Koa();
const PORT = 3001;

router.get('/', ctx => {
  ctx.body = 'Hello World';
});
// app.use(handleResponse)

// 通过app.use启用路由,其他中间件也由app.use启用
app.use(router.routes(), router.allowedMethods());

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
});