function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  body.style.background = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
});
