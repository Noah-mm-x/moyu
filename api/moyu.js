const getInfo = (ctx) => {
  ctx.body = {
    code: 200,
    data: [
      {
        type: 1,
        content: "爱你呦\n😊"
      }
    ],
    msg: '成功',
  }
}
module.exports = {
  getInfo
}