import {
  simpleModal
} from './modal.js';

const modalCheckCity = document.querySelector( '.modal__btn-check' );

const checkFlagCounter = () => {
  if ( localStorage.getItem( 'flagCounter' ) ) {
    modalCheckCity.classList.add( 'modal__btn-check--checked' );
  } else {
    modalCheckCity.classList.remove( 'modal__btn-check--checked' );
  }
};

const resetCounter = () => {
  localStorage.removeItem( 'on_load_counter' );
};

const counterLoad = ( count, time ) => {
  if ( !localStorage.getItem( 'flagCounter' ) ) {
    let n = localStorage.getItem( 'on_load_counter' );

    if ( n === null ) {
      n = 0;
    }
    n++;

    localStorage.setItem( 'on_load_counter', n );

    if ( n === count ) {
      resetCounter();
      setTimeout( () => {
        simpleModal.open( '#change-city-modal' );
      }, time );
    }
  } else {
    resetCounter();
  }
};

export const initChangeCity = () => {
  if ( !modalCheckCity ) return;

  modalCheckCity.addEventListener( 'click', () => {
    if ( !modalCheckCity.classList.contains( 'modal__btn-check--checked' ) ) {
      modalCheckCity.classList.add( 'modal__btn-check--checked' );
      localStorage.setItem( 'flagCounter', true );
    } else {
      modalCheckCity.classList.remove( 'modal__btn-check--checked' );
      localStorage.removeItem( 'flagCounter' );
    }
  } );
  checkFlagCounter();
  counterLoad( 1, 1500 );
};
