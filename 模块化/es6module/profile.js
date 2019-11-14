// alert("外部模块profile.js被导入了")
export var m = "这是外部模块的";
export function myMethod(){
  alert('这是来自外部模块的方法');
}
export default "foo bar";
console.log("我看下模块中的this指向哪里:", this);