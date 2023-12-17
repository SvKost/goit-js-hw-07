const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const elems = event.target.elements;
  const data = {
    email: elems.email.value.trim(),
    password: elems.password.value.trim(),
  };

  if (data.email === '' || data.password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(data);
    form.reset();
  }
});
