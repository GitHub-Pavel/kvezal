import $ from 'jquery';

export default $(function() {
  $('body').on('click', '.sub-menu__link--button', e => {
    e.preventDefault();
    $(e.currentTarget).closest('.sub-menu__item').toggleClass('sub-menu__item--open').find('.sub-menu__lower-menu').stop().slideToggle(300);
  });
  // $('body').on('mouseenter', '.sub-menu__item', e => {
  //   $(e.currentTarget).toggleClass('sub-menu__item--open').find('.sub-menu__lower-menu').stop().slideToggle('slow');
  // });
  // $('body').on('mouseleave', '.sub-menu__item', e => {
  //   $(e.currentTarget).toggleClass('sub-menu__item--open').find('.sub-menu__lower-menu').stop().slideToggle('slow');
  // });

  $('body').on('click', '.header__ham', (e) => {
    e.preventDefault();
    $('body').toggleClass('menu-active');
  });

  $('body').on('click', '.main-menu__item--many', e => {
    if ($(e.target).hasClass('main-menu__item--many')) {
      $(e.target).find('.main-menu__sub-menu').slideToggle(() => {
        if($(e.target).hasClass('main-menu__item--open')) {
          $(e.target).find('.main-menu__sub-menu').css('display', '');
        }
        $(e.target).toggleClass('main-menu__item--open');
      });
    }
  });
});