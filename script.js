// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Menu animation on hover
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('mouseenter', () => {
    const spans = menuIcon.querySelectorAll('span');
    spans[0].style.width = '25px';
    spans[2].style.width = '25px';
});

menuIcon.addEventListener('mouseleave', () => {
    const spans = menuIcon.querySelectorAll('span');
    spans[0].style.width = '20px';
    spans[2].style.width = '20px';
});

// Parallax effect on hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-item').forEach(el => {
    observer.observe(el);
});