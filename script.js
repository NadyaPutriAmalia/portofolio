// Smooth scroll saat klik menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Tutup menu setelah klik di mobile
        const menuList = document.getElementById('menuList');
        if (menuList.classList.contains('open')) {
            menuList.classList.remove('open');
        }
    });
});

// Toggle menu mobile
const menuToggle = document.getElementById('menuToggle');
const menuList = document.getElementById('menuList');

menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('open');
    menuToggle.classList.toggle('active');
});

// Animasi icon burger
menuToggle.addEventListener('click', () => {
    const spans = menuToggle.querySelectorAll('span');
    spans[0].classList.toggle('rotate1');
    spans[1].classList.toggle('hide');
    spans[2].classList.toggle('rotate2');
});
