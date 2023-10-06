const hamburgerMenu = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__navigation-container');
const closeIcon = document.querySelector('.nav__close-icon');
const dropDown = document.querySelectorAll('.nav__list-item--span');

dropDown.forEach(item => {
    item.addEventListener('click', () => {
        item.nextElementSibling?.classList.toggle('active');
    })
})

hamburgerMenu?.addEventListener('click', () => {
    mobileMenu?.classList.add('active');
})

closeIcon?.addEventListener('click', () => {
    mobileMenu?.classList.remove('active');
})