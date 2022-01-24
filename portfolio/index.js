const hamburger = document.querySelector('.hamburger-lines');
const nav = document.querySelector('.nav-list');

function toggleMenu() {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
}
hamburger.addEventListener('click', toggleMenu);
