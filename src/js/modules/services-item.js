import $ from 'jquery';

export default $(function() {
  const items = $('.services-item');
  const speed = 300;

  const handler = (e) => {
    let maxHeight = 0;

    items.css('minHeight', '');

    items.each(function() {
      if ($(this).height() > maxHeight) maxHeight = $(this).height();
    });

    items.css('minHeight', maxHeight);
  }
  handler();

  $('body').on('DOMSubtreeModified', '.services-item__title', handler);
  $(window).on('resize', handler);

  $('body').on('mouseenter', '.services-item', (e) => {
    $(e.currentTarget).find('.services-item__content').addClass('services-item__content--active').find('.services-item__list').stop().slideDown(speed);
  });
  $('body').on('mouseleave', '.services-item', (e) => {
    $(e.currentTarget).find('.services-item__list').stop().slideUp(speed, () => {
      $(e.currentTarget).find('.services-item__content').removeClass('services-item__content--active');
    });
  });
});