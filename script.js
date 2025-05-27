document.addEventListener('DOMContentLoaded', function () {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
  }
  darkModeToggle && darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Font Size Adjustment
  const increaseFontBtn = document.getElementById('increaseFont');
  const decreaseFontBtn = document.getElementById('decreaseFont');
  increaseFontBtn && increaseFontBtn.addEventListener('click', () => {
    document.body.classList.remove('font-small');
    document.body.classList.add('font-large');
  });
  decreaseFontBtn && decreaseFontBtn.addEventListener('click', () => {
    document.body.classList.remove('font-large');
    document.body.classList.add('font-small');
  });

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  backToTop && backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Newsletter Signup
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterMsg = document.getElementById('newsletterMsg');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        newsletterMsg.textContent = "Please enter a valid email address.";
        newsletterMsg.className = "error";
        return;
      }
      newsletterMsg.textContent = "Subscribed! Thank you 🎉";
      newsletterMsg.className = "success";
      newsletterEmail.value = "";
      setTimeout(() => {
        newsletterMsg.textContent = "";
        newsletterMsg.className = "";
      }, 4000);
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active Navigation Highlighting
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.href && link.getAttribute('href') !== '#') {
      if (window.location.pathname.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
      }
    }
  });
});