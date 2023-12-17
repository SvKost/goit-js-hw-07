const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  const inputValue = inputEl.value.trim();
  if (inputValue === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = inputValue;
  }
});
