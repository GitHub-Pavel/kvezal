import $ from 'jquery';
import { gsap, TimelineLite } from "gsap/all";

export default $(function() {
  gsap.registerPlugin()

  const startScroll = $('.stages').offset().top - 100;
  const endScroll = $('.stages').offset().top + 300;
  const title = $('.stages-item__title');
  const img = $('.stages-item__img');
  const num = $('.stages-item__num-circle');
  const lineOne = $('.stages-item__line--first');
  const lineTwo = $('.stages-item__line--second');
  const lineThree = $('.stages-item__line--third');
  let was = false;
  var tl = new TimelineLite();

  // animation settings
  const durAll = 0.5;
  const durLine = 0.3;
  const typeAnim = {
    title: {
      duration: durAll, 
      y: 0, 
      opacity: 1
    },
    img: {
      duration: durAll, 
      y: 0, 
      opacity: 1
    },
    lineThree: {
      duration: durAll, 
      width: 'calc(100% - var(--num-size))'
    },
    num: {
      duration: durAll, 
      opacity: 1, 
      scale: 1
    },
    even: {
      lineOne: {
        duration: durLine, 
        width: 124,
        ease: 'none'
      },
      lineTwo: {
        duration: durLine, 
        width: 'calc(100% - 100px)',
        ease: 'none'
      }
    },
    odd: {
      lineOne: {
        duration: durLine, 
        width: 119,
        ease: 'none'
      },
      lineTwo: {
        duration: durLine, 
        width: 'calc(100% - 100px)',
        ease: 'none'
      }
    }
  };

  const anim = () => {
    if ($(window).width() >= 960 && was === false) {
      const scrollTop = $(window).scrollTop();
      console.log(scrollTop, startScroll, endScroll)
      if (scrollTop >= startScroll && scrollTop <= endScroll) {
        was = true;
        tl
          .to(title[0], typeAnim['title'])
          .to(img[0], typeAnim['img'], '-=0.5')
          .to(lineOne[0], typeAnim['odd']['lineOne'])
          .to(lineTwo[0], typeAnim['odd']['lineTwo'])
          .to(lineThree[0], typeAnim['lineThree'])
          .to(num[1], typeAnim['num'], '-=0.3')
          .to(lineOne[1], typeAnim['even']['lineOne'])
          .to(lineTwo[1],  typeAnim['even']['lineTwo'])
          .to(title[1], typeAnim['title'])
          .to(img[1], typeAnim['img'], '-=0.5')
          .to(lineThree[1], typeAnim['lineThree'])
          .to(num[2], typeAnim['num'], '-=0.3')
          .to(lineOne[2], typeAnim['odd']['lineOne'])
          .to(lineTwo[2],  typeAnim['odd']['lineTwo'])
          .to(title[2], typeAnim['title'])
          .to(img[2], typeAnim['img'], '-=0.5')
          .to(lineThree[2], typeAnim['lineThree'])
          .to(num[3], typeAnim['num'], '-=0.3')
          .to(lineOne[3], typeAnim['even']['lineOne'])
          .to(lineTwo[3],  typeAnim['even']['lineTwo'])
          .to(title[3], typeAnim['title'])
          .to(img[3], typeAnim['img'], '-=0.5')
          .to(lineThree[3], typeAnim['lineThree'])
          .to(num[4], typeAnim['num'], '-=0.3')
          .to(lineOne[4], typeAnim['odd']['lineOne'])
          .to(lineTwo[4],  typeAnim['odd']['lineTwo'])
          .to(title[4], typeAnim['title'])
          .to(img[4], typeAnim['img'], '-=0.5')
          .to(lineThree[4], typeAnim['lineThree'])
          .to(num[5], typeAnim['num'], '-=0.3')
          .to(lineOne[5], typeAnim['even']['lineOne'])
          .to(lineTwo[5],  typeAnim['even']['lineTwo'])
          .to(title[5], typeAnim['title'])
          .to(img[5], typeAnim['img'], '-=0.5')
        ;
      }
    }
  };
  anim();

  $(window).on('scroll', (e) => {
    anim();
  });
});