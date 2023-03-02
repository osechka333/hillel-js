import Chat from "./Chat.js";

const form = document.querySelector('#formWs');
const container = document.querySelector('#container');
const chat = new Chat({
  onMessage: (message) => {
    renderMessage(message);
  },
});

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault();

  const message = {
    name: form.name.value,
    text: form.text.value,
  };

  chat.send(message);
}

function renderMessage(message) {
  const html = `<li>${message.name}: ${message.text}</li>`

  container.insertAdjacentHTML('beforeend', html);
}