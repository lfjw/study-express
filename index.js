// let express = require('./express/index');

let express = require('express');

let app = express();

app.get('/',
  function (req, res, next) {
    console.log(1);
    next()
  },
  function (req, res, next) {
    console.log(11);
    next()
  }
)

app.get('/user', function (req, res) {
  res.end('user')
})

app.get('/', function (req, res) {
  console.log(2);
  res.end('/')
})

app.listen(3000, () => {
  console.log('启动成功，3000');
})