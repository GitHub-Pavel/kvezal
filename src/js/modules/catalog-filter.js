import $ from 'jquery';

export default $(function() {
  const filter = $('.catalog-filter');

  $('body').on('click', '.catalog-btn', (e) => {
    e.preventDefault();

    filter.stop().slideToggle(300, function() {
      if ($(this).is(':visible'))
          $(this).css('display','flex');
  });
    $(e.currentTarget).toggleClass('catalog-btn--active');
  });
});