import Chat from './Chat.js';

const form = document.querySelector('#chatForm');
const containerForMessage = document.querySelector('#containerForSavedMessages');
const chat = new Chat({
    onMessage: ((data) => {
        displayUserInput(data);
        clearFormAfterSend();
    })
});

form.addEventListener('submit', onFormDataSubmit);

function onFormDataSubmit(e) {
    e.preventDefault();

    const clientMessage = {
        name: form.userName.value,
        text: form.message.value
    }

    chat.send(clientMessage);
}

function displayUserInput(userInput) {
    let html = `<li>${userInput.name}: ${userInput.text}</li>`
    containerForMessage.insertAdjacentHTML('beforeend', html);
}

function clearFormAfterSend() {
    form.reset();
}