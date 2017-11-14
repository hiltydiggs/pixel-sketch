$(document).ready(function(){

  let mode = 'black';
  let $resetButton = $('#reset');
  let $colorButton = $('#color');
  let $darkenButton = $('#darken');
  let $gridItems;
  let $grid = $('#grid');
  let $gridItem = $('<div></div>', {'class': 'grid-item'});

  $resetButton.on('click', resetButton);
  $colorButton.on('click', function(e) {
    e.preventDefault();
    mode = 'color';
    assignHandler($gridItems);
  });
  $darkenButton.on('click', function(e) {
    e.preventDefault();
    mode = 'darken';
    assignHandler($gridItems);
  });

  function resetButton(e) {
    if (e) {
      e.preventDefault();
    }
    let userInput = parseInt(prompt('Please enter a grid width (1-100):'));
    if (userInput > 0 && userInput <= 100) {
      createGrid(userInput);
    } else {
      resetButton();
    }
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
    resetCSS($gridItems);
  }

  function assignHandler(els) {
    els.off('mouseenter');
    if (mode === 'darken') {
      els.on('mouseenter', function() {
        let opacity = +$(this).css('opacity') + 0.1;
        $(this).css({
          'background': 'black',
          'opacity': opacity
        })
      });
    } else if (mode === 'color') {
      els.on('mouseenter', function() {
        $(this).css({
          'background': `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
          'opacity': 1});
      });
    } else {
      els.on('mouseenter', function() {
        $(this).css({
          'background': 'black',
          'opacity': 1});
      });
    }

  }

  function resetCSS(els) {
    els.each(function() {
      $(this).css({'background': 'none', 'opacity': 0});
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