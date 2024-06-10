document.addEventListener('DOMContentLoaded', function () {
    
    
    var swiper = new Swiper('.conteudo', {
        loop: true, 
        slidesPerView: 3, 
        spaceBetween: 30, 
        centeredSlides:'true',
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
        grabCursor:'true',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets:true,
        },
        autoplay: {
            delay: 5000, // Tempo de atraso entre os slides (em ms)
            disableOnInteraction: false, // Continua a reprodução automática após a interação do usuário
        },
        320: {
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            spaceBetween: 40
          }
    })
})

