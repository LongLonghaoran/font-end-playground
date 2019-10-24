const http = require('http');
const fs = require('fs');
const path = require('path');
const template = require('art-template')
template.defaults.imports.log = console.log;
template.defaults.cache = false;

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer();
var url = require("url");
var querystring = require("querystring");

function sendFile(filePath, contentType, res) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('读取失败');
    } else {
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
}
server.on('request', function(req, res){
  const url = req.url;
  if(url == "/") {
    sendFile('./index.html', 'text/html; charset=utf-8', res);
  }else if(url == '/list.html') {
    // 将文件中保存的用户数据返回
    fs.readFile('./notes.json', function(err, data){
      if (err) {
        console.log(err);
      }else{  
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end(template(__dirname + '/artemplate/noteList.art', { notes: JSON.parse(data.toString())}))
        
      }
    })
  }else if(url == "/delete"){
    var postData = ""; //POST & GET ： name=zzl&email=zzl@sina.com
    // 数据块接收中
    req.addListener("data", function (postDataChunk) {
      postData += postDataChunk;
    });
    var params = querystring.parse(postData);
    // 删除消息
    var json = JSON.parse(fs.readFileSync("./notes.json"));
    for(var key in json){
      if(params.noteId == key){
        // 若与文件中的相匹配，即删除
        delete json[key];


      }
    }
  } else if (url == "/addNote") {
    var postData = ""; //POST & GET ： name=zzl&email=zzl@sina.com
    // 数据块接收中
    req.addListener("data", function (postDataChunk) {
      postData += postDataChunk;
    });
    console.log('-------', postData);
    // 获取所有留言
    var notes;
    fs.readFileSync("./notes.json", function (err, data) {
      if(err){
        console.log("读取文件出错:", err);
      }else{
        notes = JSON.parse(data.toString());
        console.log('--------', notes);
        // 获取最大的id
        var ids = Object.keys(notes);
        // 获取最大id
        var maxId = ids.sort(function (a, b) {
          return b - a;
        })[0];
        notes[maxId] = postData.content;
        // 新增消息s
        fs.writeFile('./notes.json', JSON.stringify(notes), 'utf-8', function (err) {
          if (err) {
            console.log("写入文件出错", err);
          } else {
            res.end("写入成功");
          }
        })
      }
    });
  }else if(path.extname(url)==".js"){
    sendFile(`./js/${path.basename(url)}`, 'text/js; charset=utf-8', res);
  } else if (path.extname(url) == ".css") {
    sendFile(`./css/${path.basename(url)}`, 'text/css; charset=utf-8', res);
  } else if (path.extname(url) == ".html") {
    sendFile(`./${path.basename(url)}`, 'text/html; charset=utf-8', res);
  }else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end('无法处理的文件类型\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});