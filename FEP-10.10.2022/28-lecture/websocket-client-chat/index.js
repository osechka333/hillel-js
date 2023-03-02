const ws = new WebSocket('ws://localhost:8080')
const form = document.querySelector('#formWs');
const container = document.querySelector('#container');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault();

  const message = {
    name: '',
    text: form.message.value,
  };

  ws.send(JSON.stringify(message));
}

ws.onopen = () => {
  console.log('Connection with server was established')
}

ws.onmessage = (event) => {
  console.log(JSON.parse(event.data))

  // renderMessage(event.data)
}

ws.onclose = () => {
  console.log('Connection with server was closed')
}

ws.onerror = (error) => {
  console.log('Connection error', error)
}

function renderMessage(message) {
  const html = `<li>${message}</li>`

  container.insertAdjacentHTML('beforeend', html);
}