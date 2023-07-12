export const Options = {
  SmoothScroll: {
    speed: 900,
    speedAsDuration: true,
    updateURL: false,
  },
  Modal: {
    linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
  },
  Mask: {
    countryCode: '+380',
    bodyMask: ' __ ___-__-__',
  },
  ValidationErrors: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--error)',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
  },
  Observer: {
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
  },
  RequestOptions: {
    HandlerURL: 'https://jsonplaceholder.typicode.com/posts',
    MethodGet: 'GET',
    MethodPost: 'POST',
  },
  Swiper: {
    MainActions: {
      slidesPerView: 1,
      spaceBetween: 30,
      preloadImages: false,
      lazy: true,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        prevEl: '.main-promotions__nav [data-to-slide="prev"]',
        nextEl: '.main-promotions__nav [data-to-slide="next"]',
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
        },
      },
    },
    Team: {
      slidesPerView: 1.4,
      spaceBetween: 20,
      preloadImages: false,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      lazy: true,
      loop: false,
      breakpoints: {
        768: {
          slidesPerView: 2.4,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    },
    MainAwards: {
      slidesPerView: 1,
      spaceBetween: 30,
      preloadImages: false,
      lazy: true,
      loop: false,
      navigation: {
        nextEl: '.main-awards__nav [data-to-slide="prev"]',
        prevEl: '.main-awards__nav [data-to-slide="next"]',
      },
    },
  },
};
