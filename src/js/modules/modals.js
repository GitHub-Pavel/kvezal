import "./import-jquery";
require("@fancyapps/fancybox");

export default (function ($, window) {
  $(function () {
    const openClass = 'animate__fadeInDown';
    const closeClass = 'animate__fadeOutUp';

    const closeModal = () => {
      const el = $('.fancybox-slide--current .modal');
      el.removeClass(openClass);
      el.addClass(closeClass);

      el.on('animationend', (e) => {
        el.off();
        el.removeClass(closeClass);
        $.fancybox.close();
      });
    }

    $("[data-fancybox]").fancybox({
      modal : true,
      touch: false,
      afterShow: function() {
        $('.fancybox-slide--current .modal').addClass(openClass);
      }
    });

    $('body').on('click', '.modal__close', (e) => {
      e.preventDefault();
      closeModal();
    });

    $('body').on('click', '.fancybox-slide--current', (e) => {
      if ($(e.target).hasClass('fancybox-slide--current')) {
        closeModal();
      }
    });
  });
})(jQuery, window);