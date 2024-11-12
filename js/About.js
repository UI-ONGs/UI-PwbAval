document.addEventListener('DOMContentLoaded', function() {
    // FAQ toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

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
});