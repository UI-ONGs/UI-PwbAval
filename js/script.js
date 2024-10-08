/*Define um Array de ONGS*/

let ongs = [
    {
        "nome": "Educar para o Futuro",
        "descricao": "Promovemos educação de qualidade para crianças e jovens.",
        "descricao_detalhada": "A Educar para o Futuro atua na promoção da educação de qualidade para crianças e jovens em situação de vulnerabilidade social no Espírito Santo. Através de programas educacionais inovadores e de acompanhamento individualizado, a organização busca garantir o acesso à educação e o desenvolvimento de habilidades essenciais para o futuro dos participantes. Atuando em parceria com escolas e comunidades, a Educar para o Futuro contribui para a construção de uma sociedade mais justa e igualitária.",
        "categoria": "Educação",
        "endereco": "Rua das Palmeiras, 123, Bairro Centro, Vitória, ES",
        "contato": {
            "instagram": "https://instagram.com/educarparafuturo",
            "facebook": "https://facebook.com/educarparafuturo",
            "telefone": "(27) 3333-1234",
            "email": "contato@educarparafuturo.org"
        }
    },
    {
        "nome": "Saúde e Vida",
        "descricao": "Assistência médica gratuita para comunidades carentes.",
        "descricao_detalhada": "A Saúde e Vida oferece assistência médica gratuita e de qualidade para comunidades carentes na Grande Vitória. Através de consultas médicas, exames, vacinação e ações de prevenção em saúde, a organização busca promover o bem-estar da população e reduzir as desigualdades no acesso à saúde. Atuando em parceria com postos de saúde e unidades móveis, a Saúde e Vida leva saúde para quem mais precisa.",
        "categoria": "Saúde",
        "endereco": "Avenida dos Andradas, 456, Bairro Jucutuquara, Vitória, ES",
        "contato": {
            "instagram": "https://instagram.com/saudeevida",
            "facebook": "https://facebook.com/saudeevida",
            "telefone": "(27) 3344-5678",
            "email": "contato@saudeevida.org"
        }
    },
    {
        "nome": "Cidadania Ativa",
        "descricao": "Empoderamento e defesa dos direitos humanos.",
        "descricao_detalhada": "A Cidadania Ativa é uma organização dedicada à defesa e promoção dos direitos humanos no Espírito Santo. Através de ações de conscientização, assessoria jurídica, acompanhamento de casos e advocacy, a organização busca fortalecer os direitos da população e garantir o acesso à justiça. Atuando em parceria com movimentos sociais e órgãos públicos, a Cidadania Ativa contribui para a construção de uma sociedade mais justa e democrática.",
        "categoria": "Direitos Humanos",
        "endereco": "Rua Sete de Setembro, 789, Bairro Praia do Canto, Vitória, ES",
        "contato": {
            "instagram": "https://instagram.com/cidadaniaativa",
            "facebook": "https://facebook.com/cidadaniaativa",
            "telefone": "(27) 3355-7890",
            "email": "contato@cidadaniaativa.org"
        }
    },
    {
        "nome": "Verde Esperança",
        "descricao": "Preservação ambiental e educação ecológica.",
        "descricao_detalhada": "A Verde Esperança trabalha pela preservação ambiental e pela educação ecológica no Espírito Santo. Através de ações de reflorestamento, proteção de áreas verdes, campanhas de conscientização e programas educativos, a organização busca promover a sustentabilidade e o respeito ao meio ambiente. Atuando em parceria com escolas, comunidades e órgãos públicos, a Verde Esperança contribui para a construção de um futuro mais verde e sustentável.",
        "categoria": "Meio Ambiente",
        "endereco": "Rua dos Ipês, 101, Bairro Jardim Camburi, Vitória, ES",
        "contato": {
            "instagram": "https://instagram.com/verdeesperanca",
            "facebook": "https://facebook.com/verdeesperanca",
            "telefone": "(27) 3366-1011",
            "email": "contato@verdeesperanca.org"
        }
    },
    {
        "nome": "Amigos do Bem-Estar",
        "descricao": "Apoio psicológico e emocional para a comunidade.",
        "descricao_detalhada": "A Amigos do Bem-Estar oferece suporte emocional e psicológico para pessoas em situação de vulnerabilidade no Espírito Santo. Através de terapias individuais e em grupo, oficinas socioeducativas e rodas de conversa, a organização busca promover o bem-estar mental, a saúde emocional e a qualidade de vida da população. Atuando em parceria com centros comunitários e unidades de saúde mental, a Amigos do Bem-Estar contribui para a quebra de tabus relacionados à saúde mental e para a criação de uma rede de apoio social.",
        "categoria": "Saúde Mental",
        "endereco": "Avenida Getúlio Vargas, 202, Bairro Centro, Vila Velha, ES",
        "contato": {
            "instagram": "https://instagram.com/amigosdobemestar",
            "facebook": "https://facebook.com/amigosdobemestar",
            "telefone": "(27) 3377-2022",
            "email": "contato@amigosdobemestar.org"
        }
    },
    {
        "nome": "Mãos que Ajudam",
        "descricao": "Assistência a famílias em situação de rua.",
        "descricao_detalhada": "A Mãos que Ajudam oferece assistência e suporte a famílias em situação de rua no Espírito Santo. Através de doações de alimentos, roupas e itens de higiene, a organização busca suprir necessidades básicas e promover a dignidade das pessoas em situação de vulnerabilidade. Além disso, a Mãos que Ajudam  trabalha pela reinserção social, oferecendo capacitação profissional, orientação jurídica e encaminhamento para serviços de assistência social.",
        "categoria": "Assistência Social",
        "endereco": "Rua das Flores, 303, Bairro Glória, Vila Velha, ES",
        "contato": {
            "instagram": "https://instagram.com/maosqueajudam",
            "facebook": "https://facebook.com/maosqueajudam",
            "telefone": "(27) 3388-3033",
            "email": "contato@maosqueajudam.org"
        }
    },
    {
        "nome": "Animal Acolhido",
        "descricao": "Resgate e cuidados para animais abandonados.",
        "descricao_detalhada": "A Animal Acolhido dedica-se ao resgate de animais abandonados e à promoção do bem-estar animal no Espírito Santo. Através de um centro de acolhimento animal, a organização oferece cuidados veterinários, castração, microchipagem e adoção responsável. Além disso, a Animal Acolhido trabalha na conscientização da população sobre maus-tratos e a guarda responsável de animais de estimação.",
        "categoria": "Proteção Animal",
        "endereco": "Rua dos Bichos, 404, Bairro Itapuã, Vila Velha, ES",
        "contato": {
            "instagram": "https://instagram.com/animalacolhido",
            "facebook": "https://facebook.com/animalacolhido",
            "telefone": "(27) 3399-4044",
            "email": "contato@animalacolhido.org"
        }
    },
    {
        "nome": "Jovens para o Futuro",
        "descricao": "Capacitação profissional para jovens.",
        "descricao_detalhada": "A Jovens para o Futuro é uma organização que atua na capacitação profissional de jovens à procura de oportunidades no mercado de trabalho no Espírito Santo. Através de cursos profissionalizantes, workshops e programas de orientação vocacional, a organização busca qualificar jovens e prepará-los para o ingresso no mercado de trabalho. Atuando em parceria com empresas e instituições de ensino, a Jovens para o Futuro contribui para a redução do desemprego juvenil e para a inserção social e econômica dos jovens.",
        "categoria": "Empregabilidade",
        "endereco": "Avenida Vitória, 505, Bairro Jardim da Penha, Vitória, ES",
        "contato": {
            "instagram": "https://instagram.com/jovensparafuturo",
            "facebook": "https://facebook.com/jovensparafuturo",
            "telefone": "(27) 3400-5055",
            "email": "contato@jovensparafuturo.org"
        }
    },
    {
        "nome": "Casa de Apoio",
        "descricao": "Acolhimento para mulheres vítimas de violência.",
        "descricao_detalhada": "A Casa de Apoio oferece acolhimento seguro e suporte psicossocial para mulheres vítimas de violência doméstica no Espírito Santo. A organização fornece um ambiente protegido, sigiloso e livre de julgamentos, além de oferecer atendimento psicológico, jurídico e social. A Casa de Apoio também trabalha pela autonomia econômica das mulheres vítimas, por meio de oficinas de geração de renda e capacitação profissional.",
        "categoria": "Direitos das Mulheres",
        "endereco": "Rua das Acácias, 606, Bairro São Torquato, Vila Velha, ES",
        "contato": {
            "instagram": "https://instagram.com/casadeapoio",
            "facebook": "https://facebook.com/casadeapoio",
            "telefone": "(27) 3411-6066",
            "email": "contato@casadeapoio.org"
        }
    },
    {
        "nome": "Esporte para Todos",
        "descricao": "Promoção do esporte e vida saudável.",
        "descricao_detalhada": "A Esporte para Todos é uma organização que acredita no poder do esporte como ferramenta de transformação social no Espírito Santo. Através da promoção da prática esportiva e de atividades físicas regulares, a organização busca estimular hábitos de vida saudáveis, o desenvolvimento do senso de equipe e o protagonismo juvenil. Atuando em parceria com prefeituras, escolas e comunidades, a Esporte para Todos contribui para a inclusão social e para a melhoria da qualidade de vida da população.",
        "categoria": "Esporte",
        "endereco": "Avenida Central, 707, Bairro Coqueiral de Itaparica, Vila Velha, ES",
        "contato": {
            "instagram": "https://instagram.com/esporteparatodos",
            "facebook": "https://facebook.com/esporteparatodos",
            "telefone": "(27) 3422-7077",
            "email": "contato@esporteparatodos.org"
        }
    }
];

// Carrega os dados das ONGs do arquivo JSON
/*fetch('../json/ongs.json')
    .then(response => response.json())
    .then(data => {
        ongs = data;
        console.log('Dados carregados:', ongs);  // Log dos dados carregados
    });*/

console.log(ongs);

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.getElementById('search-results');
    const searchBtn = document.querySelector('.search-button');
    const orgCards = document.getElementById('org-cards');

    // Function to display search results
    // Função para exibir resultados de busca
    function displayResults(results) {
        searchResults.innerHTML = '';
        if (results.length > 0) {
            results.forEach(ong => {
                const div = document.createElement('div');
                div.textContent = ong.nome;
                div.addEventListener('click', () => {
                    // Redirecionar para a página de detalhes da ONG
                    navigateToOngDetails(ong);
                });
                searchResults.appendChild(div);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    }

    // Função para exibir resultados de busca
    function displayResults(results) {
        searchResults.innerHTML = '';
        if (results.length > 0) {
            results.forEach(ong => {
                const div = document.createElement('div');
                div.textContent = ong.nome;
                div.addEventListener('click', () => {
                    // Navegar para a página de detalhes da ONG
                    navigateToOngDetails(ong);
                });
                searchResults.appendChild(div);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    }

    // Função para navegar para a página de detalhes da ONG
    function navigateToOngDetails(ong) {
        // Armazenar os dados da ONG no sessionStorage
        sessionStorage.setItem('selectedOng', JSON.stringify(ong));
        // Redirecionar para a página de detalhes
        window.location.href = 'Detalhes-Instituicao.html';
    }

    // Funcionalidade de busca
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.trim() === '') {
            searchResults.style.display = 'none';
            return;
        }
        const results = ongs.filter(ong => ong.nome.toLowerCase().includes(query));
        displayResults(results);
    });

    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        if (query.trim() === '') {
            searchResults.style.display = 'none';
            return;
        }
        const results = ongs.filter(ong => ong.nome.toLowerCase().includes(query));
        displayResults(results);
    });

    // Fechar resultados de busca ao clicar fora
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });

    // Exibir ONGs em destaque
    function displayFeaturedOngs() {
        const featuredOngs = ongs.slice(0, 3); // Exibir as primeiras 3 ONGs
        orgCards.innerHTML = '';
        featuredOngs.forEach(ong => {
            const card = document.createElement('div');
            card.className = 'org-card animate-on-scroll';
            card.innerHTML = `
                <div class="org-card-image">
                    <img src="imagens/${ong.nome.toLowerCase().replace(/\s+/g, '-')}.jpg" alt="${ong.nome}">
                </div>
                <div class="org-card-content">
                    <h3>${ong.nome}</h3>
                    <p>${ong.descricao}</p>
                    <a href="#" class="btn btn-tertiary">Saiba mais</a>
                </div>
            `;
            orgCards.appendChild(card);
        });
    }

    // Inicialmente, ocultar resultados de busca
    searchResults.style.display = 'none';

    displayFeaturedOngs();

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        console.log('Newsletter subscription:', email);
        // Here you would typically send this to your backend
        alert('Obrigado por se inscrever em nossa newsletter!');
        newsletterForm.reset();
    });

    // Button click handlers
    document.getElementById('nearbyInst-btn').addEventListener('click', function() {
        window.location.href = 'Geo-Map.html';
    });

    document.getElementById('login-btn').addEventListener('click', function() {
        window.location.href = 'Login.html';
    });

    document.getElementById('join-btn').addEventListener('click', function() {
        // Redirect to sign up page or show sign up modal
        console.log('Join button clicked');
    });
});

/*TESTES*/
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade do calendário
    const calendarBody = document.getElementById('calendarBody');
    const currentMonthElement = document.getElementById('currentMonth');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const eventList = document.getElementById('eventList');

    let currentDate = new Date();
    let events = [
        { date: new Date(2023, 8, 15), title: "Dia Mundial da Limpeza", description: "Junte-se a nós para limpar praias e parques em sua cidade.", organizer: "Amigos da Natureza" },
        { date: new Date(2023, 8, 22), title: "Maratona Solidária", description: "Corra por uma causa! Arrecadação para projetos educacionais.", organizer: "Educação para Todos" },
        { date: new Date(2023, 9, 1), title: "Feira de ONGs", description: "Conheça e apoie diversas organizações em um só lugar.", organizer: "Solidarize" }
    ];

    function generateCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        currentMonthElement.textContent = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(firstDay);

        let calendarHTML = '';
        let dayCount = 1;

        for (let i = 0; i < 6; i++) {
            calendarHTML += '<tr>';
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startingDay) {
                    calendarHTML += '<td></td>';
                } else if (dayCount > daysInMonth) {
                    calendarHTML += '<td></td>';
                } else {
                    const currentDateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${dayCount.toString().padStart(2, '0')}`;
                    const isToday = dayCount === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear();
                    const hasEvent = events.some(event => event.date.toDateString() === new Date(year, month, dayCount).toDateString());
                    calendarHTML += `<td class="${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}" data-date="${currentDateString}">${dayCount}</td>`;
                    dayCount++;
                }
            }
            calendarHTML += '</tr>';
            if (dayCount > daysInMonth) break;
        }

        calendarBody.innerHTML = calendarHTML;
        addCalendarClickListeners();
        updateEventList(year, month);
    }

    function addCalendarClickListeners() {
        const calendarCells = calendarBody.querySelectorAll('td');
        calendarCells.forEach(cell => {
            cell.addEventListener('click', function() {
                const clickedDate = this.dataset.date;
                if (clickedDate) {
                    const event = events.find(e => e.date.toDateString() === new Date(clickedDate).toDateString());
                    if (event) {
                        showEventModal(event);
                    }
                }
            });
        });
    }

    function updateEventList(year, month) {
        const monthEvents = events.filter(event => event.date.getFullYear() === year && event.date.getMonth() === month);
        eventList.innerHTML = '';
        monthEvents.forEach(event => {
            const listItem = document.createElement('li');
            listItem.className = 'event-item';
            listItem.innerHTML = `
                <div class="event-date">
                    <span class="day">${event.date.getDate()}</span>
                    <span class="month">${new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(event.date)}</span>
                </div>
                <div class="event-details">
                    <h5>${event.title}</h5>
                    <p>${event.description}</p>
                    <a href="#" class="event-link">Saiba mais</a>
                </div>
            `;
            listItem.querySelector('.event-link').addEventListener('click', (e) => {
                e.preventDefault();
                showEventModal(event);
            });
            eventList.appendChild(listItem);
        });
    }

    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

    prevMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    nextMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    // Modal para eventos
    const modal = document.getElementById('eventModal');
    const modalTitle = document.getElementById('modalEventTitle');
    const modalDescription = document.getElementById('modalEventDescription');
    const modalOrganizer = document.getElementById('modalEventOrganizer');
    const modalRegisterButton = document.getElementById('modalEventRegister');
    const closeModal = document.getElementsByClassName('close')[0];
    const carousel = document.getElementById('eventCarousel');

    function showEventModal(event) {
        modalTitle.textContent = event.title;
        modalDescription.textContent = event.description;
        modalOrganizer.textContent = `Organizado por: ${event.organizer}`;
        
        // Simular imagens para o carrossel
        carousel.innerHTML = `
            <img src="/placeholder.svg?height=300&width=500" alt="Imagem do evento 1">
            <img src="/placeholder.svg?height=300&width=500" alt="Imagem do evento 2">
            <img src="/placeholder.svg?height=300&width=500" alt="Imagem do evento 3">
        `;
        
        modal.style.display = 'block';
    }

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    modalRegisterButton.onclick = function() {
        alert('Inscrição realizada com sucesso!');
        modal.style.display = 'none';
    }

    // Animação de contagem para as estatísticas
    const stats = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.impact-stats');

    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    let count = 0;
                    const updateCount = () => {
                        const increment = target / 200;
                        if (count < target) {
                            count += increment;
                            stat.innerText = Math.ceil(count).toLocaleString();
                            requestAnimationFrame(updateCount);
                        } else {
                            stat.innerText = target.toLocaleString();
                        }
                    };
                    updateCount();
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const statsObserver = new IntersectionObserver(animateStats, { threshold: 0.5 });
    statsObserver.observe(statsSection);

    // Slider para depoimentos
    const testimonialSlider = document.querySelector('.testimonial-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - testimonialSlider.offsetLeft;
        scrollLeft = testimonialSlider.scrollLeft;
    });

    testimonialSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    testimonialSlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    testimonialSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialSlider.offsetLeft;
        const walk = (x - startX) * 3;
        testimonialSlider.scrollLeft = scrollLeft - walk;
    });

    // Formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Obrigado por se inscrever! Você receberá nossas atualizações em ${email}`);
        this.reset();
    });

    // Simulação de carregamento do mapa
    const mapOverlay = document.querySelector('.map-overlay');
    setTimeout(() => {
        mapOverlay.style.display = 'none';
    }, 2000);

    // Funcionalidade de pesquisa (simulada)
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Pesquisando por: ${searchTerm}`);
            // Aqui você implementaria a lógica real de pesquisa
        }
    }

    // Animação de fade-in para elementos quando entram na viewport
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Animação suave de rolagem para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const searchResults = document.getElementById('search-results');
const initialOffsetTop = searchResults.offsetTop;

/*Função para esconder o container de resultados quando houver rolagem*/
document.addEventListener('scroll', () => {
    if (window.scrollY > initialOffsetTop) {
        searchResults.classList.add('hidden');
    } else {
        searchResults.classList.remove('hidden');
    }
});