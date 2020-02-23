/**
 * 应用
 */

const http = require('http');
const Router = require('./routers/index');
const router = new Router();

function Application() {
}

Application.prototype.get = function (path, handler) {
  router.get(path, handler)
}

Application.prototype.listen = function () {
  const server = http.createServer((req, res) => {
    router.handler(req, res, () => {
      // 匹配不到
      res.end(`Cannot ${req.method} ${req.url}`)
    })
  })
  server.listen(...arguments);
}

module.exports = Application