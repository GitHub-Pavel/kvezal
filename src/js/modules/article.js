import $ from 'jquery';

export default $(function() {
  const items = $('.article');

  items.each(function() {
    const last = $(this).find('*').last();

    if (last.prop('tagName') === 'P') {
      $(this).addClass('article--pb');
    }
  });
});