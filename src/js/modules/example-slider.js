import $ from 'jquery';

export default $(function() {
  const parent = $('.example');
  
  if (parent.length) {
    const config = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      nextArrow: '<button type="button" class="slick-next slick-arrow"><svg width="40" height="40"><use href="#slider_right"></use></svg></button>',
      prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg width="40" height="40"><use href="#slider_left"></use></svg></button>',
      appendArrows: $('.example__pagination'),

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '45px',
            arrows: false
          }
        },
        {
          breakpoint: 831,
          settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '45px',
            arrows: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '45px',
            arrows: false
          }
        }
      ]
    }

    $('.example__slider').slick(config);
  }
});