//NAVIGATOR MENU

const navigationHamburgerMenuIcon = document.querySelector(
  '.js-navigation__hamburger-menu-icon'
);
const navigationMenu = document.querySelector('.js-navigation__menu');

let desktopMediaQuery = window.matchMedia('(min-width: 1024px');

const openNavigationMenu = () => {
  navigationHamburgerMenuIcon.src = './assets/icons/at_close.svg';
  navigationMenu.classList.add('js-navigation__menu--open');
};

const closeNavigationMenu = () => {
  navigationHamburgerMenuIcon.src = './assets/icons/at_hamburger_menu.svg';
  navigationMenu.classList.remove('js-navigation__menu--open');
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

// TYPE WRITER
// function setupTypewriter(t) {
//   var HTML = t.innerHTML;

//   t.innerHTML = '';

//   var cursorPosition = 0,
//     tag = '',
//     writingTag = false,
//     tagOpen = false,
//     typeSpeed = 100,
//     tempTypeSpeed = 0;

//   var type = function () {
//     if (writingTag === true) {
//       tag += HTML[cursorPosition];
//     }

//     if (HTML[cursorPosition] === '<') {
//       tempTypeSpeed = 0;
//       if (tagOpen) {
//         tagOpen = false;
//         writingTag = true;
//       } else {
//         tag = '';
//         tagOpen = true;
//         writingTag = true;
//         tag += HTML[cursorPosition];
//       }
//     }
//     if (!writingTag && tagOpen) {
//       tag.innerHTML += HTML[cursorPosition];
//     }
//     if (!writingTag && !tagOpen) {
//       if (HTML[cursorPosition] === ' ') {
//         tempTypeSpeed = 0;
//       } else {
//         tempTypeSpeed = Math.random() * typeSpeed + 50;
//       }
//       t.innerHTML += HTML[cursorPosition];
//     }
//     if (writingTag === true && HTML[cursorPosition] === '>') {
//       tempTypeSpeed = Math.random() * typeSpeed + 50;
//       writingTag = false;
//       if (tagOpen) {
//         var newSpan = document.createElement('span');
//         t.appendChild(newSpan);
//         newSpan.innerHTML = tag;
//         tag = newSpan.firstChild;
//       }
//     }

//     cursorPosition += 1;
//     if (cursorPosition < HTML.length - 1) {
//       setTimeout(type, tempTypeSpeed);
//     }
//   };

//   return {
//     type: type,
//   };
// }

// var typer = document.getElementById('typewriter');

// typewriter = setupTypewriter(typewriter);

// typewriter.type();

//INTERSECTION OBSERVER
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      if (entry.target.className.includes('js-download-cv')) {
        entry.target.classList.add('heart-beat-animation');
      } else {
        // Add the animation class
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
