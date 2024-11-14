document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.navbar-mobile-toggle');
    const mobileMenu = document.querySelector('.navbar-mobile-menu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});



const faqData = {
    sobre: [
        { question: "Quem somos nós?", answer: "Somos uma organização dedicada a conectar voluntários com instituições que precisam de ajuda." },
        { question: "Qual é a nossa missão?", answer: "Nossa missão é promover o voluntariado e apoiar causas sociais importantes." },
        { question: "Como surgiu nossa organização?", answer: "Nossa organização surgiu da necessidade de criar uma ponte entre pessoas dispostas a ajudar e instituições que precisam de apoio." }
    ],
    instituicoes: [
        { question: "Como uma instituição pode se cadastrar?", answer: "As instituições podem se cadastrar através do nosso site, preenchendo um formulário detalhado." },
        { question: "Quais tipos de instituições podem participar?", answer: "Aceitamos instituições de diversos setores, incluindo educação, saúde, meio ambiente e assistência social." },
        { question: "Há algum custo para as instituições?", answer: "Não, nossos serviços são gratuitos para todas as instituições cadastradas." }
    ],
    voluntariados: [
        { question: "Como posso me tornar um voluntário?", answer: "Você pode se cadastrar como voluntário em nosso site e escolher as causas que mais te interessam." },
        { question: "Quais tipos de trabalho voluntário estão disponíveis?", answer: "Oferecemos uma variedade de oportunidades, desde trabalho administrativo até ações diretas em campo." },
        { question: "Preciso ter experiência prévia para ser voluntário?", answer: "Não é necessário ter experiência prévia. Valorizamos a disposição e o comprometimento dos voluntários." }
    ]
};

const tabs = document.querySelectorAll('.tab');
const faqContainer = document.getElementById('faq-container');

function createFaqItem(question, answer) {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.innerHTML = `
        <div class="faq-question">
            <span>${question}</span>
            <span class="chevron">▼</span>
        </div>
        <div class="faq-answer">${answer}</div>
    `;
    return item;
}

function updateFAQ(category) {
    faqContainer.innerHTML = '';
    faqData[category].forEach(item => {
        const faqItem = createFaqItem(item.question, item.answer);
        faqContainer.appendChild(faqItem);
    });

    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const chevron = item.querySelector('.chevron');

        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            answer.style.display = isOpen ? 'none' : 'block';
            chevron.classList.toggle('up', !isOpen);
        });
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        updateFAQ(tab.dataset.tab);
    });
});

// Initialize with 'sobre' category
updateFAQ('sobre');