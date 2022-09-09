/**
 * router.js
 * 路由回调函数单独抽出,不在router中操作业务逻辑，方便维护
 */
// const router = new Router()
const router = require('koa-router')();
const userApi = require('./api/user')

router.post('/user', userApi.getUser)

//  router
//    .get('/user', controllers.getUsersList)
//    .get('/user/:id', controllers.getUsersById)
//    .post('/user', controllers.addUsers)
//    .put('/user/:id', controllers.updateUsers)
//    .delete('/user/:id', controllers.delUsers)

module.exports = router