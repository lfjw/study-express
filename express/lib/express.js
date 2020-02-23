/**
 * 创建应用
 */

let Application = require('./application');

function createApplication() {
  return new Application();
}

module.exports = createApplication;