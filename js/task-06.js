function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();

    const boxesArray = Array.from({ length: amount });
    let size = 30;

    boxesArray.forEach(() => {
      const box = document.createElement('div');

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxesDiv.appendChild(box);
      size += 10;
    });

    input.value = '';
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}
