const toggleButton = document.getElementById('dark_mode');
const body = document.getElementsByTagName("body")[0];

toggleButton.addEventListener('click', () => {
  body.classList.toggle('light');
});
