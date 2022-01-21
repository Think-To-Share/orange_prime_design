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