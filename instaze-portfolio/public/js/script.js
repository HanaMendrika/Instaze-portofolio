const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'flex';
  navLinks.style.display = isOpen ? '' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '100%';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = '#0F0A0A';
  navLinks.style.padding = '2rem';
  navLinks.style.zIndex = '99';
});

// Smooth scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-tile, .what-is, .cta-band').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// ============ CARROUSEL HERO ============
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.carousel-arrow.prev');
const nextBtn = document.querySelector('.carousel-arrow.next');

let currentSlide = 0;
let autoplayInterval;

function goToSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

nextBtn?.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
prevBtn?.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => { goToSlide(i); resetAutoplay(); });
});

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 5000);   // ← 5 secondes
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

if (slides.length > 0) startAutoplay();