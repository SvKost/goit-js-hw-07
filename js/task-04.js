const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const elems = event.target.elements;
  const data = {
    email: elems.email.value.trim(),
    password: elems.password.value.trim(),
  };

  if (elems.email.value === '' || elems.password.value === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(data);
  }
  form.reset();
});
