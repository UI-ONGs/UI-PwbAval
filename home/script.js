let ongs = [];

// Carrega os dados das ONGs do arquivo JSON
fetch('ongs.json')
    .then(response => response.json())
    .then(data => ongs = data);

// Adiciona um listener ao campo de pesquisa para capturar a entrada do usuário
document.getElementById('search').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let results = ongs.filter(ong => ong.nome.toLowerCase().includes(query));
    displayResults(results);
});

// Função para exibir os resultados da pesquisa
function displayResults(results) {
    let resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';  // Limpa resultados anteriores
    if (results.length > 0) {
        results.forEach((ong, index) => {
            let div = document.createElement('div');
            div.textContent = ong.nome;
            div.addEventListener('click', () => {
                showInfo(index);  // Passe o índice da ONG selecionada
                resultsContainer.style.display = 'none';  // Esconde resultados ao clicar em uma ONG
            });
            resultsContainer.appendChild(div);
        });
        resultsContainer.style.display = 'block';  // Exibe a lista de resultados
    } else {
        resultsContainer.style.display = 'none';  // Esconde a lista se não houver resultados
    }
}

// Função para exibir as informações da ONG selecionada
function showInfo(index) {
    const ong = ongs[index];
    document.getElementById('ong-nome').textContent = ong.nome;
    document.getElementById('ong-descricao').textContent = ong.descricao;
    document.getElementById('ver-mais').setAttribute('data-index', index);  // Defina o data-index aqui
    document.getElementById('info').style.display = 'flex';  // Exibe as informações da ONG
}

// Adiciona um listener ao documento para detectar cliques fora do contêiner de pesquisa
document.addEventListener('click', function(event) {
    let searchContainer = document.querySelector('.search-container');
    let resultsContainer = document.getElementById('results');
    // Verifica se o clique ocorreu fora do contêiner de pesquisa
    if (!searchContainer.contains(event.target)) {
        resultsContainer.style.display = 'none';  // Esconde os resultados
    }
});

// Impede que o clique no campo de pesquisa feche os resultados
document.getElementById('search').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Evento de clique no botão "Ver mais"
document.getElementById('ver-mais').addEventListener('click', function () {
    const index = this.getAttribute('data-index');
    if (index !== null) {
        const ong = ongs[index];
        const url = new URL('detalhes/detalhe.html', window.location.origin);
        url.searchParams.set('nome', ong.nome);
        url.searchParams.set('categoria', ong.categoria);
        url.searchParams.set('descricao', ong.descricao_detalhada);
        url.searchParams.set('endereco', ong.endereco);
        url.searchParams.set('instagram', ong.contato.instagram);
        url.searchParams.set('facebook', ong.contato.facebook);
        url.searchParams.set('telefone', ong.contato.telefone);
        url.searchParams.set('email', ong.contato.email);
        window.location.href = url;
    } else {
        alert('Por favor, selecione uma ONG antes de clicar em "Ver mais".');
    }
});
