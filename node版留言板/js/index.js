$(function(){
  // 从服务器端获取数据并且渲染在页面上
  var xhr = new XMLHttpRequest();
  xhr.open("get", "/list.html");
  xhr.onreadystatechange = function(e){
    if(this.readyState==4 && this.status ===200){
      // 数据加载完成
      console.log(this.response);
      $("#noteList").html(this.response);
    }
  }
  xhr.send();
})