$(document).ready(function(){
  let $gridItems;
  let $grid = $('#grid');
  let $gridItem = $('<div></div>', {'class': 'grid-item'});

  function createGrid(width) {
    let totalGridItems = width * width;
    $grid.css({
      'grid-template-columns': `repeat(${width}, 1fr)`,
      'grid-template-rows': `repeat(${width}, 1fr)`
    })
    for (let i=0; i < totalGridItems; i++) {
      $gridItem.clone().appendTo($grid);
    }
    $gridItems = $('.grid-item');
  }
  
  createGrid(40);

  $gridItems.on('mouseenter', function() {
    $(this).addClass('black');
  });

});