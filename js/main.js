var $showHide=$('.btn-show-hide');
var $btnMove=$('.btn-move');
var $collExpand=$('.btn-collapse-expand');
var $btnBounce=$('.btn-bounce');
var $btnAppend=$('.btn-append');

$showHide.on('click', function(){
  $('.box').toggleClass('show');
});

$btnMove.on('click', function(){
  $('.diamond').toggleClass('move');
});

$btnMove.on('click', function(){
  $('.panel').toggleClass('move');
});

$btnMove.on('click', function(){
  $('.circle').toggleClass('move');
});

$btnMove.on('click', function(){
  $('.list').toggleClass('move');
});
