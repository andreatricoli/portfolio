const navigationHamburgerMenuIcon = document.querySelector(
  '.js-navigation__hamburger-menu-icon'
);
const navigationMenu = document.querySelector('.navigation__menu');

let desktopMediaQuery = window.matchMedia('(min-width: 1024px');
let tabletMediaQuery = window.matchMedia('(min-width: 768px');

const desktopMediaQueryHandler = () => {
  if (desktopMediaQuery.matches) {
    navigationMenu.style.display = 'flex';
  } else {
    navigationMenu.style.display = 'none';
  }
};

desktopMediaQuery.addEventListener('change', desktopMediaQueryHandler);

navigationHamburgerMenuIcon.addEventListener('click', e => {
  if (navigationMenu.style.display === 'flex') {
    navigationHamburgerMenuIcon.src = './assets/icons/at_hamburger_menu.svg';
    navigationMenu.style.display = 'none';
  } else {
    navigationHamburgerMenuIcon.src = './assets/icons/at_close.svg';
    navigationMenu.style.display = 'flex';
  }
});
