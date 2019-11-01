// 临时使用一个数组来维护留言表
var comments = ['测试'];
var express = require('express');
var router = express.Router();
module.exports = router;
router.get('/new', function (req, res) {
}).post('/messages', function (req, res) {
  comments.push(req.body.content);
  res.redirect('/');
}).get('/', function (req, res) {
  res.render('index.html', { notes: comments })
});