import {
  initSlider,
  initTabs
} from './utils.js';

const getSalonAddr = ( i ) => {
  return document.querySelectorAll( '#salonList li' )[ i ].textContent;
};

export const initPriceSlider = () => {
  if ( !document.querySelector( '.price__slider-container' ) ) return;

  document.querySelectorAll( '[data-tabs="price"]' ).forEach( ( element, index ) => {
    element.dataset.tabs = `price-${index}`;
    initTabs( element.dataset.tabs, {
      activeBtnClass: 'is-active'
    } );
  } );

  initSlider( '.price__slider-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    preloadImages: false,
    lazy: true,
    loop: false,
    allowTouchMove: false,
    pagination: {
      el: '.price__slider-pagination',
      clickable: true,
      renderBullet: function( index, className ) {
        return `<span class="${className} price__slider-bullet">${getSalonAddr(index)}</span>`;
      },
    },
  } );
};
