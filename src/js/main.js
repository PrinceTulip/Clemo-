const Masonry = require('masonry-layout');
const slick = require('slick-carousel');
const $ = require('jquery');

window.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.best-work-row');
  const msnry = new Masonry(grid, {
    // options...
    itemSelector: '.best-work__item',
    columnWidth: '.best-work__item',
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
    $('.client-says-slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      waitForAnimate: false,
      slidesToShow: 4,
      slidesToScroll: 4,

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



  const menu = document.querySelector('.header-navigation__list'),
      menuItem = document.querySelectorAll('.header-navigation__list-item'),
      hamburger = document.querySelector('.header__burger-button');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__burger-button--active');
    menu.classList.toggle('header-navigation__list--active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('header__burger-button--active');
      menu.classList.toggle('header-navigation__list--active');
    })
  })

});




