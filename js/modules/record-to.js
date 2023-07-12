import {
  Options,
} from './options.js';

const recordModal = new HystModal( Options.Modal );

const cb = ( modal ) => {
  if ( modal.starter ) {
    modal.openedWindow.querySelector( '[data-spec="title"]' ).textContent = modal.starter.dataset.spec;
    modal.openedWindow.querySelector( '[data-spec="input"]' ).value = modal.starter.dataset.spec;
  }
};

recordModal.config.beforeOpen = cb;

export {
  recordModal
};
