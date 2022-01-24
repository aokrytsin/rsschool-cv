const hamburger = document.querySelector('.hamburger-lines');
const nav = document.querySelector('.nav-list-burger');

function toggleMenu() {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
}
hamburger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav-link');

nav.addEventListener('click', closeMenu);

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        nav.classList.remove('is-active');
    }
}
