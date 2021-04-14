import $ from 'jquery';

export default $(function() {
  const items = $('.canvas__rec');

  items.each(function() {
    const classes = $(this).attr('class').split(/\s+/);
    const item = $(this);
    let size,sizeX,sizeY;

    classes.map(index => {
      if (index.includes('canvas__rec--size_')) {
        size = +index.split('size_')[1].split('x')[0] * +index.split('size_')[1].split('x')[1];
        sizeX = +index.split('size_')[1].split('x')[0];
        sizeY = +index.split('size_')[1].split('x')[1];
      }
    });

    item.css({
      'gridTemplateColumns': 'repeat('+sizeX+',1fr)',
      'gridTemplateRows': 'repeat('+sizeY+',1fr)'
    });

    for(let i=0; i<size; i++) {
      const el = '<div class="canvas__square"></div>';
      item.html(item.html() + el);
    }
  });
});