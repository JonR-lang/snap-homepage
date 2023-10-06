var hamburgerMenu = document.querySelector('.nav__hamburger');
var mobileMenu = document.querySelector('.nav__navigation-container');
var closeIcon = document.querySelector('.nav__close-icon');
var dropDown = document.querySelectorAll('.nav__list-item--span');
dropDown.forEach(function (item) {
    item.addEventListener('click', function () {
        var _a;
        (_a = item.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.toggle('active');
    });
});
hamburgerMenu === null || hamburgerMenu === void 0 ? void 0 : hamburgerMenu.addEventListener('click', function () {
    mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.add('active');
});
closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon.addEventListener('click', function () {
    mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.remove('active');
});
