document.addEventListener('DOMContentLoaded', () => {
    /* pega o forms */
    const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        /* pega os campos de entrada */

        const nome = document.getElementById('nome').value;
        const tipo = document.getElementById('tipo').value;
        const desc = document.getElementById('desc').value;
        const endereco = document.getElementById('Endereco').value;
        const data = document.getElementById('data').value;
        const horarioI = document.getElementById('horarioI').value;
        const horarioF = document.getElementById('horarioF').value;

        /* guarda em um objeto */

        const eventData = {
            nome,
            tipo,
            desc,
            endereco,
            data,
            horarioI,
            horarioF
        };

        /* guardano local storage */

        localStorage.setItem('eventData', JSON.stringify(eventData));

        window.location.href = 'Detalhe-Vagas.html';
    });
});
