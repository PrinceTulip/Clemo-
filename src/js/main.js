const Masonry = require('masonry-layout');
window.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.best-work-row');
  const msnry = new Masonry( grid, {
    // options...
    itemSelector: '.best-work__item',
    columnWidth: 364,
    percentPosition: true
  });

  const slider = () => {

    function bindSlider(slidesSelector, prevSelector, nextSelector, dotsSelector, activeDotSelector) {
      const slides = Array.prototype.slice.call(document.querySelectorAll(slidesSelector));
      createDots();
      const prev = document.querySelector(prevSelector);
      const next = document.querySelector(nextSelector);
      const dots = Array.prototype.slice.call(document.querySelectorAll(dotsSelector));
      const activeDot = activeDotSelector;
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
          item.classList.add('slideInUp');
        });
        slides[n - 1].style.display = 'block';
        slides[n - 1].classList.add('slideInUp');
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

      //autoPlay();
      showSlide(slideIndx)
    }

    bindSlider('.slider-item', '.control__left', '.control__right', '.control__dot', 'control__dot--active')
  };
  slider();
  });

