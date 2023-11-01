/**
 * Main - Front Pages
 */
'use strict';

(function () {
  const sliderPricing = document.getElementById('slider-pricing'),
    swiperLogos = document.getElementById('swiper-clients-logos'),
    swiperReviews = document.getElementById('swiper-reviews');

  // Hero
  const mediaQueryXL = '1200';
  const width = screen.width;
  if (width >= mediaQueryXL) {
    document.addEventListener('mousemove', function parallax(e) {
      this.querySelectorAll('.animation-img').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 100;
        let y = (window.innerWidth - e.pageY * speed) / 100;
        layer.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }

  // noUiSlider
  // Pricing slider
  // -----------------------------------
  if (sliderPricing) {
    noUiSlider.create(sliderPricing, {
      start: [458],
      step: 1,
      connect: [true, false],
      behaviour: 'tap-drag',
      direction: isRtl ? 'rtl' : 'ltr',
      tooltips: [
        {
          to: function (value) {
            return parseFloat(value).toLocaleString('en-EN', { minimumFractionDigits: 0 }) + '+';
          }
        }
      ],
      range: {
        min: 0,
        max: 916
      }
    });
  }

  // swiper carousel
  // Customers reviews
  // -----------------------------------
  if (swiperReviews) {
    new Swiper(swiperReviews, {
      slidesPerView: 1,
      spaceBetween: 5,
      centeredSlides: true,
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      loopAdditionalSlides: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });
  }

  // Review client logo
  // -----------------------------------
  if (swiperLogos) {
    new Swiper(swiperLogos, {
      slidesPerView: 2,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      breakpoints: {
        992: {
          slidesPerView: 5
        },
        768: {
          slidesPerView: 3
        }
      }
    });
  }
})();
