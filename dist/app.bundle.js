/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 971:
/***/ (() => {

function lockScroll() {
  // var xPos = window.scrollX;
  // var yPos = window.scrollY;
  // window.onscroll = () => window.scroll(xPos, yPos);
  document.body.style.overflow = 'hidden';
  document.body.style.userSelect = 'none';
  // console.log('locked');
}

function unlockScroll() {
  document.body.style.overflow = 'auto';
  document.body.style.userSelect = 'auto';
  // window.onscroll = '';
}

//NAVIGATOR MENU

const navigationHamburgerMenuIcon = document.querySelector(
  '.js-navigation__hamburger-menu-icon'
);
const navigationMenu = document.querySelector('.js-navigation__menu');
const navigationMenuItems = document.querySelectorAll(
  '.js-navigation__menu .navigation__item'
);

let desktopMediaQuery = window.matchMedia('(min-width: 1024px');

const openNavigationMenu = () => {
  console.log('opened');
  navigationHamburgerMenuIcon.src = '/src/assets/icons/at_close.svg';
  navigationMenu.classList.add('js-navigation__menu--open');
  lockScroll();
};

const closeNavigationMenu = () => {
  navigationHamburgerMenuIcon.src = '/src/assets/icons/at_hamburger_menu.svg';
  navigationMenu.classList.remove('js-navigation__menu--open');
  unlockScroll();
};

const desktopMediaQueryHandler = () => {
  if (desktopMediaQuery.matches) {
    closeNavigationMenu();
  }
};

desktopMediaQuery.addEventListener('change', desktopMediaQueryHandler);

navigationHamburgerMenuIcon.addEventListener('click', e => {
  if (navigationMenu.classList.contains('js-navigation__menu--open')) {
    closeNavigationMenu();
  } else {
    openNavigationMenu();
  }
});

navigationMenuItems.forEach(el => {
  el.addEventListener('click', e => {
    closeNavigationMenu();
  });
});

//INTERSECTION OBSERVER
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      if (entry.target.className.includes('js-download-cv')) {
        entry.target.classList.add('heart-beat-animation');
      } else if (entry.target.className.includes('js-projects__items')) {
        entry.target.classList.add('bounce-in-up-animation');
      } else {
        entry.target.classList.add('fade-in-up-animation');
      }
    }
  });
});

var timelineCards = document.querySelectorAll('.timeline__card');
timelineCards.forEach(timelineCard => {
  observer.observe(timelineCard);
});
observer.observe(document.querySelector('.about__photo'));
observer.observe(document.querySelector('.js-download-cv'));
observer.observe(document.querySelector('.js-projects__items'));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__(177);
__webpack_require__(971);

})();

/******/ })()
;