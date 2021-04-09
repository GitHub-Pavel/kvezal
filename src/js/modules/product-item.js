import $ from 'jquery';

export default $(function() {
  const items = $('.product-item__title');

  const handler = (e) => {
    let maxHeight = 0;

    items.css('minHeight', '');

    items.each(function() {
      if ($(this).height() > maxHeight) maxHeight = $(this).height();
    });

    items.css('minHeight', maxHeight);
  }
  handler();

  $(window).on('resize', handler);
  $('body').on('DOMSubtreeModified', '.product-item__title', handler);
});