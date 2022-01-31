//================================= ! Hamburger
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
//================================= ! Portfolio 
const portfolioImages = document.querySelectorAll('.portfolio-img');
const portfolioBtns = document.querySelector('.portfolio-btn-section');

function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    if (event.target.dataset.season == "winter") {
      portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
    } if (event.target.dataset.season == "spring") {
      portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
    } if (event.target.dataset.season == "summer") {
      portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
    } if (event.target.dataset.season == "autumn") {
      portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
    }
  }
}

portfolioBtns.addEventListener('click', changeImage);