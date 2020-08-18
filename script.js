'use strict';


/* mobile menu */
let openTopNav  = document.querySelector('.js-open-top-nav'),
    topNavBack  = document.querySelector('.js-close-top-nav'),
    topNav      = document.querySelector('.js-top-nav');

openTopNav.addEventListener('click', () => {
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
    navs.classList.toggle('open');
    closeTopNav();
});

let bottomNavOne        = document.getElementsByClassName('js-bottom-nav__list-level-one'),
    bottomNavTwoClose   = document.getElementsByClassName('js-close-second-layer');


for(let navElem of bottomNavOne){
    navElem.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        navElem.querySelector('.js-bottom-nav__list-level-two')
            .classList.add('open')
    });
}

for(let closeNavElem of bottomNavTwoClose){
    closeNavElem.addEventListener('click', (e) => {
        closeNavElem.parentNode.classList.remove('open')
        e.stopPropagation();
    });
}

let mobileSearchbarBtn  = document.querySelector('.js-open-search-btn'),
    mobileSearchbar     = document.querySelector('.js-searchbar--mobile');

mobileSearchbarBtn.addEventListener('click', () => {
    mobileSearchbar.classList.toggle('open');
});
/* mobile menu end */




/* slider */
/* I've used swiper.js for the sliders */
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