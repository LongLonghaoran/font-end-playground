const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const template = require('art-template')
template.defaults.imports.log = console.log;
template.defaults.cache = false;

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer();
var querystring = require("querystring");
var comments = [];


function sendFile(filePath, contentType, res) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('读取失败' + err);
    } else {
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
}
server.on('request', function(req, res){
  const req_url = req.url;
  if (req_url === "/") {
    sendFile('./index.html', 'text/html; charset=utf-8', res);
  } else if (req_url === '/list.html') {
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end(template(__dirname + '/artemplate/noteList.art', { notes: comments }))
  } else if (req_url == "/delete"){
    
  } else if (req_url.indexOf("/addNote")!==-1) {
    var query = url.parse(req_url, true).query;
    if (query.content !== ""){
      comments.push(query.content);
      // 评论成功后重定向
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end()
    }
    res.end('没有内容');
  } else if (path.extname(req_url)==".js"){
    sendFile(`./js/${path.basename(req_url)}`, 'text/js; charset=utf-8', res);
  } else if (path.extname(req_url) == ".css") {
    sendFile(`./css/${path.basename(req_url)}`, 'text/css; charset=utf-8', res);
  } else if (path.extname(req_url) == ".html") {
    sendFile(`./${path.basename(req_url)}`, 'text/html; charset=utf-8', res);
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end('无法处理的文件类型\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});