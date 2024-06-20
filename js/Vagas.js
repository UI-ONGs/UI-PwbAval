// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function () {

  // Inicializa uma nova instância do Swiper para o elemento com a classe '.conteudo'
  var swiper = new Swiper('.conteudo', {
    
    // Configurações do carrossel para permitir a navegação em loop infinito
    loop: true,
    
    // Define o número de slides visíveis por vez e o espaço entre eles
    slidesPerView: 3,
    spaceBetween: 30,
    
    // Centraliza os slides ativos
    centeredSlides: true,
    
    // Ativa a navegação por teclado, permitindo que as teclas de seta naveguem entre os slides
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    
    // Configura a funcionalidade de zoom dentro do carrossel
    zoom: {
      maxRatio: 5,
    },
    
    // Habilita a navegação pelos slides usando a roda do mouse, invertendo a direção padrão
    mousewheel: {
      invert: true,
    },
    
    // Ativa o modo livre, permitindo que os slides se movam livremente com um efeito de 'adesão'
    freeMode: {
      enabled: true,
      sticky: true,
    },
    
    // Habilita o cursor de agarrar quando o usuário passa o mouse sobre os slides
    grabCursor: true,
    
    // Configura os botões de navegação para avançar e retroceder nos slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Configura a paginação, permitindo que os usuários cliquem em pontos para navegar entre os slides
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    
    // Ativa a reprodução automática dos slides, com um atraso de 5000ms (5 segundos)
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    // Configurações de breakpoints para adaptar o carrossel a diferentes larguras de tela para o próximo trabalho
    breakpoints: {
      // Quando a largura da janela é >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // Quando a largura da janela é >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // Quando a largura da janela é >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
});
