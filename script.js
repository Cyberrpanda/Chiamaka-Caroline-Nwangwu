// script.js – Optimised: no heavy computations, just essential interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Add shadow to header on scroll (lightweight)
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.classList.add('shadow-xl');
      } else {
        header.classList.remove('shadow-xl');
      }
    }, { passive: true }); // passive for better scroll performance
  }

  // Intersection Observer for fade-up sections (lightweight)
  const faders = document.querySelectorAll('.fade-up');
  if (faders.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    faders.forEach(fader => {
      observer.observe(fader);
    });
  }

  console.log('✅ Optimised portfolio loaded – smooth and stable.');
});