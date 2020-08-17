'use strict';


/* mobile menu */
let openTopNav  = document.querySelector('.js-open-top-nav'),
    topNavBack  = document.querySelector('.js-close-top-nav'),
    topNav      = document.querySelector('.js-top-nav');

openTopNav.addEventListener('click', () => {
    console.log(topNav)
    topNav.classList.add('open');
});

function closeTopNav () {
    topNav.classList.remove('open');
}

topNavBack.addEventListener('click', () =>{
    closeTopNav()
});

let burgermenu  = document.querySelector('.js-menu-btn'),
    navs        = document.querySelector('.js-navs');

burgermenu.addEventListener('click', () => {
    console.log(navs)
    navs.classList.toggle('open');
    closeTopNav();
});

let bottomNavOne        = document.querySelector('.js-bottom-nav__list-level-one'),
    bottomNavTwo        = document.querySelector('.js-bottom-nav__list-level-two'),
    bottomNavTwoClose   = document.querySelector('.js-close-second-layer');

bottomNavOne.addEventListener('click', () => {
    bottomNavOne.querySelector('.js-bottom-nav__list-level-two')
        .classList.add('open')
});

bottomNavOne.addEventListener('click', (e) => {
    bottomNavOne.querySelector('.js-bottom-nav__list-level-two')
        .classList.add('open')
    e.stopPropagation();
    e.preventDefault();
});
bottomNavTwoClose.addEventListener('click', (e) => {
    bottomNavTwo.classList.remove('open')
    e.stopPropagation();
});

let mobileSearchbarBtn  = document.querySelector('.js-open-search-btn'),
    mobileSearchbar     = document.querySelector('.js-searchbar--mobile');

mobileSearchbarBtn.addEventListener('click', () => {
    mobileSearchbar.classList.toggle('open');
});
/* mobile menu end */




/* slider */
let headerSujet = new Swiper('.header-sujet-slider', {
    speed: 1000,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.header-sujet-slider-next',
        prevEl: '.header-sujet-slider-prev',
    }
});

let contentSlider = new Swiper('.content-slider', {
    speed: 1000,
    slidesPerView: 'auto',
    autoplay: false,
    navigation: {
        nextEl: '.content-slider-button-next',
        prevEl: '.content-slider-button-prev',
    },

    breakpoints: {
        1920: {
            slidesOffsetBefore: 180,
        }
    }
});