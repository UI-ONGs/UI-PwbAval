document.addEventListener('DOMContentLoaded', function () {

  var swiper = new Swiper('.conteudo', {
    loop: true,

    centeredSlides: true,
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    
    zoom: {
      maxRatio: 5,
    },
    
    mousewheel: {
      invert: true,
    },
    
    freeMode: {
      enabled: true,
      sticky: true,
    },
    
    grabCursor: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "coverflow",

    coverflowEffect: {
      rotate: -5,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    
    breakpoints: {
      640: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1100: {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400: {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
});
