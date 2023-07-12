export const initCertificatesSliders = () => {
  const certificateSliders = document.querySelectorAll( '.certificates' );

  certificateSliders.forEach( ( slider ) => {
    const containerView = slider.querySelector( '.certificates__view' );
    const containerPreview = slider.querySelector( '.certificates__preview' );

    const sliderPreview = new Swiper( containerPreview, {
      slidesPerView: 3,
      spaceBetween: 10,
      preloadImages: false,
      lazy: true,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
    } );

    new Swiper( containerView, {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      preloadImages: false,
      lazy: true,
      observer: true,
      observeParents: true,
      thumbs: {
        swiper: sliderPreview,
        slideThumbActiveClass: 'certificates__thumb--active',
      }
    } );
  } );
};
