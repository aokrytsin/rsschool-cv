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
        hamburger.classList.remove('is-active');
        nav.classList.remove('is-active');
    }
}

console.log(`
Ваша отметка - 78 балла(ов)

Частично выполненные пункты:
1) секция video — 2 балл(а)
2) секция price — 3 балл(а)
`)
