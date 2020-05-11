const Masonry = require('masonry-layout');
const slick = require('slick-carousel');
const $ = require('jquery');

window.addEventListener('DOMContentLoaded', () => {

  try {
    setTimeout(() => {
      document.querySelector('.preloader').style.display = 'none';
    }, 350)
  }catch (e) {}

  try {
    const grid = document.querySelector('.best-work-row');
    const grid2 = document.querySelector('.best-work-row--works');
    const msnry = new Masonry(grid, {
      // options...
      itemSelector: '.best-work__item',
      columnWidth: '.best-work__item',
      percentPosition: true
    });

    const msnry2 = new Masonry(grid2, {
      // options...
      itemSelector: '.best-work__item',
      columnWidth: '.best-work__item',
      percentPosition: true
    });
  } catch (e) {
  }

  $(document).ready(function () {
    $('.promo-slider').slick({
      arrows: false,
      dots: true,
      autoHeight: true,
      autoplay: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      waitForAnimate: false
    });
  });

  $(document).ready(function () {
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
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }

      ]
    });
  });

  $(document).ready(function () {
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
      responsive: [
        {
          breakpoint: 849,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  $(document).ready(function () {
    $('.instagram-slider').slick({
      arrows: false,
      dots: false,
      autoplay: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      waitForAnimate: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      speed: 4000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }

      ]
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
  });

  const tabs = () => {
    const bindTabs = (triggerSelector, contentSelector, activeSelector, display, filterSelector, addedFilteredSelector) => {
      try {
        const trigger = document.querySelectorAll(triggerSelector);
        const content = document.querySelector(contentSelector);
        const filteredWrap = document.querySelector(addedFilteredSelector);
        const active = activeSelector;
        const child = [...content.children];

        trigger.forEach((item, i) => {
          item.addEventListener('click', (e) => {
            e.preventDefault();
            const filterName = item.dataset[filterSelector];
            hideTabs();
            e.preventDefault();
            showTabs(i, filterName);
          })
        });

        const hideTabs = () => {
          trigger.forEach((item) => {
            item.classList.remove(active);
          });
          child.forEach((item) => {
            item.style.display = 'none';
          })
        };

        const filterContent = (i, filterName) => {
          return child.filter((item) => {
            if (item.classList.contains(filterName)) {
              return item;
            }
          });
        };

        const showTabs = (i, filterName) => {
          trigger[i].classList.add(active);
          const filtered = filterContent(i, filterName);

          filtered.forEach((item) => {
            item.style.display = display;
          })
        };

        hideTabs();
        showTabs(0, 'all')
      } catch (e) {
      }
    };

    bindTabs('.best-work__tab', '.best-work-row--works', 'tab--active', 'block', 'workFilter');
    bindTabs('.main__tab', '.main__content-blog', 'tab--active', 'flex', 'filterBlog');
  };

  tabs();
});




