import $ from 'jquery';
import Blazy from 'blazy';

import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import '@scss/main.scss';
import 'animate.css';

import '@img/hero/0.jpg';
import '@img/hero/background.png';

import '@modules/main-menu';
import '@modules/services-item';
import '@modules/article';
import '@modules/canvas';
import '@modules/modals';
import '@modules/stages-anim';
import '@modules/message';
import '@modules/product-item';

import loadSprite from '@modules/loadSprite';
import SVGSprite from '@img/sprite.svg';


const pages = require('@modules/pages.config.json').pages;
pages.forEach((file) => {
  require(`@pug/pages/${file}.pug`);
});

if (SVGSprite) {
  loadSprite(SVGSprite, {
    fill: false
  });
}

$(function() {
  let blazy = new Blazy();

  $('body').on('click', '.scroll-to', (e) => {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(e.currentTarget).attr('href')).offset().top - 60
    }, 2000);
  });
});