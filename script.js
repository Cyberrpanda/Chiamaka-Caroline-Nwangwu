// script.js – dynamic year, header shadow, and improved intersection observer for fade sections

document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Add shadow to header when scrolled
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.classList.add('shadow-xl');
      } else {
        header.classList.remove('shadow-xl');
      }
    });
  }

  // Intersection Observer for fade-in sections – triggers earlier (rootMargin)
  const sections = document.querySelectorAll('.fade-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, {
    threshold: 0,
    rootMargin: "50px 0px 50px 0px" // triggers when section is within 50px of viewport
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  console.log('✅ Portfolio loaded – smooth scroll, early fade animations, hover effects active.');
});