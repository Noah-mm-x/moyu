const getUser = (ctx) => {
  ctx.body = {
    code: 200,
    data: {
      list: [1, 2, 3]
    },
    msg: '成功',
  }
}
module.exports = {
  getUser
}