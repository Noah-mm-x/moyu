const handleResponse = ctx => {
  // ctx.type = 'application/json'
  ctx.type = 'application/x-www-form-urlcoded'
  ctx.body = {
    code: 200,
    msg: ctx.msg || 'success',
    data: ctx.result || null,
  }
}

module.exports = {
  handleResponse
}