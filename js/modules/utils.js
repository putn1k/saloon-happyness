const disableSubmitBtn = ( form ) => {
  form.querySelector( '[type="submit"]' ).setAttribute( 'disabled', 'disabled' );
};

const enableSubmitBtn = ( form ) => {
  form.querySelector( '[type="submit"]' ).removeAttribute( 'disabled' );
};

const isEscKey = ( evt ) => evt.key === 'Escape';

const iosChecker = () => {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes( navigator.platform )
    // iPad on iOS 13 detection
    ||
    ( navigator.userAgent.includes( 'Mac' ) && 'ontouchend' in document );
};

const iosVhFix = () => {
  if ( !( !!window.MSInputMethodContext && !!document.documentMode ) ) {
    if ( iosChecker() ) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty( '--vh', `${vh}px` );

      window.addEventListener( 'resize', function() {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty( '--vh', `${vh}px` );
      } );
    }
  }
};

const initSlider = ( selector, options ) => {
  if ( !document.querySelector( selector ) ) return;
  return new Swiper( document.querySelector( selector ), options );
};

const initSliders = ( selector, options ) => {
  document.querySelectorAll( selector ).forEach( ( slider, index ) => {
    slider.setAttribute( 'data-slider', index );
    slider.previousElementSibling.setAttribute( 'data-controls-slider', index );
    Object.assign( options, {
      navigation: {
        nextEl: `[data-controls-slider="${index}"] [data-to-slide="prev"]`,
        prevEl: `[data-controls-slider="${index}"] [data-to-slide="next"]`,
      },
    } );
    initSlider( `[data-slider="${index}"]`, options );
  } );
};

const initTabs = ( name, options = null ) => {
  if ( !document.querySelector( `[data-tabs="${name}"]` ) ) return;
  return new JustTabs( name, options );
};

export {
  disableSubmitBtn,
  enableSubmitBtn,
  isEscKey,
  iosVhFix,
  initSlider,
  initSliders,
  initTabs,
};
