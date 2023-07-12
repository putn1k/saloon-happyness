import {
  Options,
} from './options.js';

const promotionModal = new HystModal( Options.Modal );

const cb = ( modal ) => {
  if ( modal.starter ) {
    modal.openedWindow.querySelector( '[data-promo="input"]' ).value = modal.starter.dataset.promoTitle;
  }
};

promotionModal.config.beforeOpen = cb;

export {
  promotionModal
};
