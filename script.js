
// ---- Intersection Observer for reveal animations ---- 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .manifesto-line').forEach(el => observer.observe(el));

// ---- Mobile Menu ----
const menuBtn = document.getElementById('menuBtn');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
  mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.add('opacity-0', 'pointer-events-none');
  mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
  });
});

// ---- Scenario Tabs ----
const tabs = document.querySelectorAll('.scenario-tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(c => {
      c.classList.add('hidden');
      c.classList.remove('grid');
    });

    const targetContent = document.getElementById('tab-' + target);
    targetContent.classList.remove('hidden');
    targetContent.classList.add('grid');
  });
});

// ---- Newsletter Form ----
const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailInput.value) {
    formMessage.classList.remove('hidden');
    emailInput.value = '';
    setTimeout(() => formMessage.classList.add('hidden'), 4000);
  }
});

// ---- Toast Notification ----
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ---- Gallery Video Play on Hover ----
document.querySelectorAll('.product-card').forEach(card => {
  const video = card.querySelector('.gallery-video');

  if (!video) return;

  card.addEventListener('mouseenter', () => {
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

// ---- Navbar scroll effect ----
let lastScroll = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 100) {
    navbar.style.top = currentScroll > lastScroll ? '-100px' : '20px';
  } else {
    navbar.style.top = '20px';
  }
  lastScroll = currentScroll;
}, { passive: true });

// ---- Subtle hero parallax ----
const heroImage = document.querySelector('.hero-image');
window.addEventListener('scroll', () => {
  if (heroImage && window.scrollY < window.innerHeight) {
    heroImage.style.transform = `scale(${1 + window.scrollY * 0.0002}) translateY(${window.scrollY * 0.15}px)`;
  }
}, { passive: true });
