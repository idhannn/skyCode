const bar = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
    bar.classList.toggle('is-active');
    menu.classList.toggle('menu-active')
});

function onclickA() {
    menu.classList.remove('menu-active')
    bar.classList.remove('is-active')
}

const icon = document.querySelector('.ikon'); 

window.addEventListener('scroll', () => {
    winPosisi = window.scrollY > 400;
    icon.classList.toggle('ada', winPosisi);
});

