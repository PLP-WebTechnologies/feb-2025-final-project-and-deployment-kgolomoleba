// Theme toggle button functionality
const themeToggleButton = document.getElementById("themeToggle");
const bodyElement = document.body;

themeToggleButton.addEventListener("click", function () {
  bodyElement.classList.toggle("dark-theme");
  const isDarkMode = bodyElement.classList.contains("dark-theme");

  // Change button icon based on theme
  themeToggleButton.textContent = isDarkMode ? "🌞" : "🌓";
});

// Read more functionality for articles
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', function () {
    const extraContent = this.nextElementSibling; // Get the next sibling (extra content)
    extraContent.classList.toggle('hidden');
    this.textContent = extraContent.classList.contains('hidden') ? 'Read More' : 'Read Less';
  });
});
