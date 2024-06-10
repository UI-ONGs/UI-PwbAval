// script.js
document.addEventListener('DOMContentLoaded', () => {
    let data = [];
    let currentIndex = 0;
    const cardContainer = document.querySelector('.card-container');

    // Carrega os dados das ONGs do arquivo JSON
    fetch('../json/ongs.json') 
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            loadCard(currentIndex, 'next'); // Carrega o card inicial após obter os dados
        });

    // Função para criar um card HTML com base nos dados fornecidos
    function createCard(cardData) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="icon">
                <img src="imagens/icon.svg" alt="icone">
            </div>
            <div class="content">
                <h3>${cardData.nome}</h3>
                <p><strong>Categoria:</strong> ${cardData.categoria}</p>
                <p>${cardData.descricao_detalhada}</p>
            </div>
            <button id="read_button"><a href="Detalhes-Instituicao.html">Ler mais</a></button>
        `;
        return card;
    }

    // Função para carregar um card com transição de slide
    function loadCard(index, direction) {
        const newCard = createCard(data[index]);
        const oldCard = document.querySelector('.card.active');

        if (oldCard) {
            // Adiciona classe de animação de saída ao card antigo
            oldCard.classList.add(direction === 'next' ? 'slide-out-left' : 'slide-out-right');
            oldCard.addEventListener('transitionend', () => {
                oldCard.remove(); // Remove o card antigo após a transição
            });
        }

        // Adiciona classe de animação de entrada ao novo card
        newCard.classList.add('active', direction === 'next' ? 'slide-in-right' : 'slide-in-left');
        cardContainer.appendChild(newCard);

        // Remove a classe de animação de entrada após um pequeno atraso para iniciar a transição
        setTimeout(() => {
            newCard.classList.remove(direction === 'next' ? 'slide-in-right' : 'slide-in-left');
        }, 50); 
    }

    // Função para mostrar o card anterior
    function showPrevCard() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : data.length - 1;
        loadCard(currentIndex, 'prev');
    }

    // Função para mostrar o próximo card
    function showNextCard() {
        currentIndex = (currentIndex < data.length - 1) ? currentIndex + 1 : 0;
        loadCard(currentIndex, 'next');
    }

    // Adiciona eventos de clique aos botões de navegação
    document.getElementById('prevBtn').addEventListener('click', showPrevCard);
    document.getElementById('nextBtn').addEventListener('click', showNextCard);

    // Carrega o card inicial
    loadCard(currentIndex, 'next'); 
});
