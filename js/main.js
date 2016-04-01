var $showHide=$('.btn-show-hide');
var $btnMove=$('.btn-move');


$showHide.on('click', function(){
  $('.box').toggleClass('show');
});

$btnMove.on('click', function(){
  $('.box').toggleClass('move');
});
