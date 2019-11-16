// define方法签名还可以写2个参数 id模块标识 devs依赖项，但是这样已经不符合cmd的规范了,而且这两个参数可以省略，所以就忽略他们
define(function (require, exports, module) {
  // var $ = require('jquery/jquery');
  // console.log("输出$", $);
  // 模块代码
  exports.name = 'longhr'
});