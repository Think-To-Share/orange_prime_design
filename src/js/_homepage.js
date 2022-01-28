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
        items: 3,
        nav: false,
        gutter:30,
        autoplay: true,
        controls:true,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
        controlsText:['<i class="fas fa-chevron-left"></i>' , '<i class="fas fa-chevron-right"></i>']
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