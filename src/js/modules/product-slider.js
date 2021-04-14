import $ from 'jquery';
import slick from 'slick-carousel';

export default $(function() {
  const parent = $('.product-slider');
  
  if (parent.length) {
    const slSmall = '.product-slider__thumb';
    const slLarge = '.product-slider__big';

    const config = {
      large: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: slSmall,
        nextArrow: '<button type="button" class="slick-next slick-arrow"><svg width="40" height="40"><use href="#slider_right"></use></svg></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg width="40" height="40"><use href="#slider_left"></use></svg></button>',
        appendArrows: $('.product-slider__pagination')
      },
      small: {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: slLarge,
        dots: false,
        arrows: false,
        focusOnSelect: true,

        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 831,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 3
            }
          },
        ]
      }
    }

    $(slLarge).slick(config.large);
    $(slSmall).slick(config.small);
  }
});