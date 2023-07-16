import {
  Options,
} from './modules/options.js';

import {
  iosVhFix,
  initSlider,
  initSliders,
  initTabs
} from './modules/utils.js';

import {
  initModal,
} from './modules/modal.js';

import {
  recordModal,
} from './modules/record-to.js';

import {
  promotionModal,
} from './modules/promotions.js';

import {
  initScrollTop
} from './modules/scroll-top.js';

import {
  validateForms
} from './modules/validate.js';

import {
  initHeaderMenu
} from './modules/header.js';

import {
  initDropdownSelect
} from './modules/dd-select.js';

import {
  initChangeCity
} from './modules/change-city.js';

import {
  initCertificatesSliders
} from './modules/certificates.js';

import {
  initPriceSlider
} from './modules/price.js';

import {
  initYTubeVideo
} from './modules/yt-video.js';

import {
  initFaq
} from './modules/faq.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    initModal();
    initModal( recordModal, 'data-hystmodal-rec' );
    initModal( promotionModal, 'data-hystmodal-promo' );
    initScrollTop();
    validateForms();
    initHeaderMenu();
    initDropdownSelect();
    initSlider( '.main-promotions__slider-container', Options.Swiper.MainActions );
    initSlider( '.main-awards__slider-container', Options.Swiper.MainAwards );
    initSlider( '.saloon-gallery__slider', Options.Swiper.MainGallery );
    initSliders( '.saloon-team__slider', Options.Swiper.Team );
    initTabs( 'team' );
    initTabs( 'contacts' );
    initChangeCity();
    initCertificatesSliders();
    initPriceSlider();
    initYTubeVideo();
    initFaq();
  } );
} );
