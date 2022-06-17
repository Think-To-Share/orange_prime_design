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
        autoplayTimeout:8000,
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

if (document.querySelector('.shop-our-section')) {
    const slider = tns({
        container: '.shop-our-section .slides',
        items: 2,
        nav: false,
        gutter:30,
        autoplay: true,
        controls:false,
        autoplayTimeout:3000,
        autoplayButtonOutput: false,
        controlsText:['<i class="fas fa-chevron-left"></i>' , '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            768:{
                items: 3,
            },
            1200:{
            items: 5,
            controls:true,
            },
        }
    })

    // slider.events.on('indexChanged', (info) => {
    //     document.querySelectorAll('.shop-our-section .slides .slide .shop-our-collection').forEach(slide => {
    //         slide.style.height = 'auto'
    //     });

    //     const activeSlide = info.slideItems[info.index];
    //     activeSlide.querySelector('.shop-our-collection').style.height = '330px'
    // })
}

//Get the button
let totop = document.querySelector("#totop");

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = () =>{scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    totop.style.display = "block";
  } else {
    totop.style.display = "none";
  }
}

window.addEventListener('load', () => {
    document.querySelector('#totop').addEventListener('click',(e) => {
        e.preventDefault();

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
})