document.addEventListener('DOMContentLoaded', function() {
    // FAQ toggle
    

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Feature slider
    const featureItems = document.querySelectorAll('.feature-item');
    const featureType = document.getElementById('feature-type');
    let currentSlide = 1;

    function updateFeature() {
        featureItems.forEach(item => item.classList.remove('active'));
        featureItems[currentSlide - 1].classList.add('active');
        featureType.textContent = currentSlide === 1 ? 'voluntário' : 'instituição';
    }

    setInterval(() => {
        currentSlide = currentSlide === 1 ? 2 : 1;
        updateFeature();
    }, 5000);

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Obrigado por se inscrever com o email: ${email}`);
        this.reset();
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.navbar-mobile-toggle');
    const mobileMenu = document.querySelector('.navbar-mobile-menu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const featureContainers = document.querySelectorAll('.features-container');

    featureContainers.forEach(container => {
        const scrollArea = container.querySelector('.features-scroll');
        const featureItems = container.querySelectorAll('.feature-item');
        const timelineDots = container.querySelectorAll('.timeline-dot');

        const observerOptions = {
            root: scrollArea,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeFeature = entry.target;
                    const featureIndex = Array.from(featureItems).indexOf(activeFeature);

                    featureItems.forEach(item => item.classList.remove('active'));
                    timelineDots.forEach(dot => dot.classList.remove('active'));

                    activeFeature.classList.add('active');
                    timelineDots[featureIndex].classList.add('active');
                }
            });
        }, observerOptions);

        featureItems.forEach(item => {
            observer.observe(item);
        });

        // Animate feature items on page load
        featureItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
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