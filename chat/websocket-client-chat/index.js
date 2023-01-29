const ws = new WebSocket('ws://localhost:8080');
const form = document.querySelector('#chatForm');
const containerForMessage = document.querySelector('#containerForSavedMessages');

form.addEventListener('submit', onFormDataSubmit);

function onFormDataSubmit(e) {
    e.preventDefault();

    const clientMessage = {
        name: form.userName.value,
        text: form.message.value
    }

    ws.send(JSON.stringify(clientMessage));
}


console.log(ws);

ws.onopen = () => {
    console.log('Websocket is connected');
}
ws.onmessage = (e) => {
    console.log('The message is sent');

    displayUserInput(e);
    clearFormAfterSend();
}

function displayUserInput(messageObject) {
    const userInput = JSON.parse(messageObject.data);

    let html = `<li>${userInput.name}: ${userInput.text}</li>`
    containerForMessage.insertAdjacentHTML('beforeend', html);
}

function clearFormAfterSend() {
    form.reset();
}