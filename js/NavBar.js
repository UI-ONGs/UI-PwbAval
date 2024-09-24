// Navbar
document.addEventListener('DOMContentLoaded', () => {
    // Navbar active link
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.closest('a').classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-mobile-toggle');
    const navbarMenu = document.querySelector('.navbar-mobile-menu');

    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar-mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });
});