var $showHide = $('.btn-show-hide');
var $btnMove = $('.btn-move');
var $collExpand = $('.btn-collapse-expand');
var $btnBounce = $('.btn-bounce');
var $btnAppend = $('.btn-append');

$showHide.on('click', function(){
  $('.box').toggleClass('show');
});

$btnMove.on('click', function(){
  $('.diamond').toggleClass('move');
});

$collExpand.on('click', function(){
  $('.panel').toggleClass('collapse');
});

$btnBounce.on('click', function(){
  $('.circle').toggleClass('bounce');
});

$btnAppend.on('click', function(){
  var $li = $('<li>');

    $li.html('New List Item');
    $('.list').append($li);
});
