const inputEl = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  const inputValue = inputEl.value.trim();
  if (inputValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = inputValue;
  }
});
