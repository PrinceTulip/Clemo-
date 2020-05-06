const Masonry = require('masonry-layout');
const slick = require('slick-carousel');

window.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.best-work-row');
  const msnry = new Masonry(grid, {
    // options...
    itemSelector: '.best-work__item',
    columnWidth: 364,
    percentPosition: true
  });


  $(".slider").slick({

    // normal options...
    infinite: false,

    // the magic
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });

  $('.single-item').slick();


  const slider = () => {

    function bindSlider(slidesSelector, prevSelector, nextSelector, dotsSelector, activeDotSelector, slideDirection, ) {
      const slides = Array.prototype.slice.call(document.querySelectorAll(slidesSelector));
      createDots();
      const prev = document.querySelector(prevSelector);
      const next = document.querySelector(nextSelector);
      const dots = Array.prototype.slice.call(document.querySelectorAll(dotsSelector));
      const activeDot = activeDotSelector;
      const sliderAnimate = slideDirection;
      let slideIndx = 1;
      let pause = null;


      function currency(n) {
        showSlide(n)
      }

      function createDots() {
        const item = document.createDocumentFragment();
        for (let i = 0; i < slides.length; i++) {
          const dot = document.createElement('i');
          dot.classList.add('control__dot');
          item.appendChild(dot);
        }
        document.querySelector('.control__dots').appendChild(item);
      }

      function showSlide(n) {

        if (slideIndx > slides.length) {
          n = 1;
          slideIndx = 1;
        } else if (slideIndx < 1) {
          slideIndx = slides.length;
          n = slides.length;
        }

        try {
          dots.forEach((item) => {
            item.classList.remove(activeDot);
          });
        } catch (e) {
        }

        slides.forEach((item) => {
          item.style.display = 'none';
          item.classList.remove(sliderAnimate);
        });
        slides[n - 1].style.display = 'block';
        slides[n - 1].classList.add(sliderAnimate);
        try {
          dots[n - 1].classList.add(activeDot);
        } catch (e) {
        }
      }

      try {
        next.addEventListener('click', () => {
          showSlide(slideIndx += 1);
        });

        prev.addEventListener('click', () => {
          showSlide(slideIndx -= 1);
        });
      } catch (e) {
      }

      try {
        dots.forEach((item, i) => {
          item.addEventListener('click', (e) => {
            e.preventDefault();
            showSlide(i + 1);
          })
        })
      } catch (e) {
      }

      const autoPlay = () => {
        pause = setInterval(() => {
          showSlide(slideIndx += 1);
        }, 5000)
      };

      slides[0].parentElement.addEventListener('mouseover', () => {
        clearInterval(pause);
      });
      slides[0].parentElement.addEventListener('mouseout', () => {
        autoPlay();
      });

      autoPlay();
      showSlide(slideIndx)
    }

    bindSlider('.promo__item', '.control__left', '.control__right', '.control__dot', 'control__dot--active', 'slideInUp' )

    bindSlider('.best-team__item-wrap', '.best-team__prevSelector', '.best-team__nextSelector', '.control__dot', 'control__dot--active', 'slideInRight')
  };


  slider();
})



