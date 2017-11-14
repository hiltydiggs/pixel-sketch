$(document).ready(function(){

  let $resetButton = $('#reset');
  let $gridItems;
  let $grid = $('#grid');
  let $gridItem = $('<div></div>', {'class': 'grid-item'});

  $resetButton.on('click', resetButton);

  function resetButton(e) {
    e.preventDefault();
    let userInput = prompt('Please enter a grid width (1-100):');
    createGrid(userInput);
  }

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
    assignHandler($gridItems);
    removeClass($gridItems, 'black');
  }

  function assignHandler(els) {
    els.on('mouseenter', function() {
      $(this).addClass('black');
    });
  }

  function removeClass(els, cls) {
    els.each(function() {
      if ($(this).hasClass(cls)) {
        $(this).removeClass(cls);
      }
    });
  }

  createGrid(40);

});