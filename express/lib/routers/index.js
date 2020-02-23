const url = require('url');

function Router(params) {
  // 储存方法 get post ...
  this.stack = [];
}

Router.prototype.get = function (path, handler) {
  this.stack.push({
    path,
    method: 'get',
    handler
  })
}

/** 
 * req 请求
 * res 响应
 * out 匹配不到
 */

Router.prototype.handler = function (req, res, out) {
  let { pathname } = url.parse(req.url)
  let reqMethod = req.method.toLowerCase()

  for (let index = 0; index < this.stack.length; index++) {
    let { method, path, handler } = this.stack[index]
    if (path == pathname && method == reqMethod) {
      return handler(req, res);
    }
  }

  return out()
}

module.exports = Router