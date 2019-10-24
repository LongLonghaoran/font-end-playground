var http = require('http')
var server = http.createServer()
server.on('request', function(req, res){
  console.log('请求地址', req.url)
  res.setHeader("Content-Type", "*/*;charset=utf-8")
  res.end("接收成功")
})
server.listen(3001, function(e){
  console.log("服务已启动", e)
})