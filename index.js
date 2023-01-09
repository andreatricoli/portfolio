const headerHamburgerMenuIcon = document.querySelector(
  '.header__hamburger-menu-icon'
);
const headerMenu = document.querySelector('.header__menu');

let desktopMediaQuery = window.matchMedia('(min-width: 992px');
let tabletMediaQuery = window.matchMedia('(min-width: 668px');

const desktopMediaQueryHandler = () => {
  if (desktopMediaQuery.matches) {
    headerMenu.style.display = 'flex';
  } else {
    headerMenu.style.display = 'none';
  }
};

desktopMediaQuery.addEventListener('change', desktopMediaQueryHandler);

headerHamburgerMenuIcon.addEventListener('click', e => {
  if (headerMenu.style.display === 'flex') {
    headerHamburgerMenuIcon.src = './assets/icons/at_hamburger_menu.svg';
    headerMenu.style.display = 'none';
  } else {
    headerHamburgerMenuIcon.src = './assets/icons/at_close.svg';
    headerMenu.style.display = 'flex';
  }
});
