document.addEventListener('DOMContentLoaded', () => {
    const eventData = JSON.parse(localStorage.getItem('eventData'));

    if (eventData) {
        const displayDiv = document.getElementById('eventDataDisplay');
        displayDiv.innerHTML = `
            <p class="Infos"><b>Nome Completo:</b> ${eventData.nome}</p>
            <p class="Infos"><b>Tipo da Ong:</b> ${eventData.tipo}</p>
            <p class="Infos"><b>Descrição:</b> ${eventData.desc}</p>
            <p class="Infos"><b>Local do Evento:</b> ${eventData.endereco}</p>
            <p class="Infos"><b>Data:</b> ${eventData.data}</p>
            <p class="Infos"><b>Horário de Início:</b> ${eventData.horarioI}</p>
            <p class="Infos"><b>Horário de Término:</b> ${eventData.horarioF}</p>
        `;
    } else {
        const displayDiv = document.getElementById('eventDataDisplay');
        displayDiv.innerHTML = `<p>Dados do evento não encontrados.</p>`;
    }
});
