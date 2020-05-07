const Masonry = require('masonry-layout');
const slick = require('slick-carousel');
const $ = require('jquery');

window.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.best-work-row');
  const msnry = new Masonry(grid, {
    // options...
    itemSelector: '.best-work__item',
    columnWidth: 364,
    percentPosition: true
  });

  $(document).ready(function(){
    $('.promo-slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      waitForAnimate: false
    });
  });

  $(document).ready(function(){
    $('.best-team-slider').slick({
      arrows: true,
      dots: true,
      autoplay: false,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      waitForAnimate: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
    });
  });

});



