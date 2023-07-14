import {
  isEscKey,
} from './utils.js';

const headerNode = document.querySelector( '.header__main' );
const headerModalNode = document.querySelector( '.header-modal' );
const MENU_ID = 'mobile-menu';
const BURGER_OPTIONS = {
  animationSpeed: 300,
  menuId: MENU_ID,
  isOpen: openMobileMenu,
  isClose: closeMobileMenu,
};
const siteBurger = new JustBurger( BURGER_OPTIONS );

function openMobileMenu() {
  document.documentElement.classList.add( 'is-open-modal' );
  headerNode.classList.add( 'header__main--expanded' );
  headerModalNode.setAttribute( 'aria-hidden', 'false' );
}

function closeMobileMenu() {
  document.documentElement.classList.remove( 'is-open-modal' );
  headerNode.classList.remove( 'header__main--expanded' );
  headerModalNode.setAttribute( 'aria-hidden', 'true' );
}

const closeMenuAfterClick = ( selectorNodes ) => {
  document.querySelectorAll( selectorNodes ).forEach( item => {
    item.addEventListener( 'click', () => {
      if ( window.matchMedia( '(max-width: 992px)' ).matches ) {
        siteBurger.close();
      }
    } );
  } );
};

const initHeaderMenu = () => {
  if ( !headerModalNode || !headerNode ) return;
  headerModalNode.id = MENU_ID;
  closeMenuAfterClick( '.header-modal .menu-item a' );
  document.addEventListener( 'keydown', ( evt ) => {
    if ( isEscKey( evt ) && headerModalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      siteBurger.close();
    }
  } );
};

export {
  initHeaderMenu
};
