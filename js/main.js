const navToggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');

let navVisible = !nav.getAttribute('data-visible');

navToggle.addEventListener('click', () => {
  navVisible = !navVisible;
  nav.setAttribute('data-visible', navVisible);
  navToggle.setAttribute('aria-expanded', navVisible);
});