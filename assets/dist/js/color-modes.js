// color-modes.js

function setTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
}

// Add event listener to toggle button
const toggleButton = document.querySelector('.bd-mode-toggle button');
toggleButton.addEventListener('click', toggleTheme);
