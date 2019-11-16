require.config({
  paths: {
    'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery',
    'joke': './joke'
  }
})
require(['jquery', 'joke'], function($){
  $("<h1>Jquery可以用了</h1>").appendTo($(document.body));
})