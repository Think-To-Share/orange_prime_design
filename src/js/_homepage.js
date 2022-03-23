import { tns } from 'tiny-slider/src/tiny-slider'

if (document.querySelector('.orange-second-hero-section')) {
    tns({
        container: '.orange-second-hero-section .slides',
        items: 1,
        nav: true,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
    })
}


if (document.querySelector('.client-section')) {
    tns({
        container: '.client-section .slides',
        items: 1,
        nav: true,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
    })
}

if (document.querySelector('.more-author-section')) {
    tns({
        container: '.more-author-section .slides',
        items: 1,
        nav: false,
        gutter:30,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
        controlsText:['<i class="fas fa-chevron-left"></i>' , '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            576:{
            items: 2,
            controls:false,
            },
            992:{
            items: 3,
            controls:true,
            },
        }
    })
}

if (document.querySelector('.story-share-section')) {
    tns({
        container: '.story-share-section .slides',
        items: 2,
        nav: false,
        gutter:25,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
        controlsText:['<i class="fas fa-chevron-left"></i>' , '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            768:{
            items: 3,
            controls:true,
            },
        }
    })
}

if (document.querySelector('.award-book-section')) {
    tns({
        container: '.award-book-section .slides1',
        items: 1,
        nav: true,
        gutter:25,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
    })
    tns({
        container: '.award-book-section .slides2',
        items: 1,
        nav: true,
        gutter:25,
        autoplay: true,
        controls:false,
        autoplayTimeout:5000,
        autoplayButtonOutput: false,
    })
}