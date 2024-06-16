const button = document.getElementById('button');

button.addEventListener('mouseover', () => {
  button.style.background = '#3e8e41';
});

button.addEventListener('mouseout', () => {
  button.style.background = '#4CAF50';
});