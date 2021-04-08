import $ from "jquery";

export default $(function() {
  $('body').on('mouseenter', '.sub-menu__item', e => {
    $(e.currentTarget).toggleClass('sub-menu__item--active').find('.sub-menu__lower-menu').stop().slideToggle('slow');
  });
  $('body').on('mouseleave', '.sub-menu__item', e => {
    $(e.currentTarget).toggleClass('sub-menu__item--active').find('.sub-menu__lower-menu').stop().slideToggle('slow');
  });
});