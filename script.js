// script.js – dynamic year, intersection observer for fade-up, header shadow, and extra interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Add shadow to header on scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.classList.add('shadow-xl', 'bg-opacity-95');
      } else {
        header.classList.remove('shadow-xl', 'bg-opacity-95');
      }
    });
  }

  // Intersection Observer for fade-up sections (triggers earlier)
  const faders = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // adjust to trigger slightly before section enters
  });

  faders.forEach(fader => {
    observer.observe(fader);
  });

  // Optional: add hover sound? no, but we can add a subtle ripple effect on buttons
  // Not needed, but we can log
  console.log('✅ Portfolio with advanced interactivity loaded – enjoy!');
});