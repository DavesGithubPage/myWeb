const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const modeBtn = document.querySelector('.modeButton');

const lampBkg = document.querySelector('.lamp__bkg');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    modeBtn.classList.toggle('inMenu');
})

addEventListener("mouseenter", ()=> {
    lampBkg.classList.remove('.lamp__bkg')
    lampBkg.classList.add('lamp__bkgActive');
  });