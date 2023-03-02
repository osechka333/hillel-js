const form = document.querySelector('#formUser');
const FORM_USER_KEY = 'formUser';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('keyup', onFormKeyup);

init()

function init() {
  const str = localStorage.getItem(FORM_USER_KEY);

  if (str) {
    const data = JSON.parse(str);

    form.firstName.value = data.firstName;
    form.lastName.value = data.lastName;
  }
}

function onFormSubmit(e) {
  e.preventDefault()

  const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
  };

  console.log('Send data to server', data);

  localStorage.removeItem(FORM_USER_KEY);
  form.reset();
}

function onFormKeyup() {
  const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
  };

  localStorage.setItem(FORM_USER_KEY, JSON.stringify(data));
}