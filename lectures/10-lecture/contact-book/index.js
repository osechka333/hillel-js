const addButton = document.querySelector('#addButton');
const table = document.querySelector('#contactList');
const inputName = document.querySelector('#msgInput');
const inputSurname = document.querySelector('#msgInput');
const inputPhone = document.querySelector('#msgInput');
const deleteButton = document.querySelector('#deleteButton');

addButton.addEventListener('click', onButtonClick);

createContact('test');

function onButtonClick() {
    const userData = getUserInput();

    if (!isUserInputValid(userData)) {
        showError();
        return;
    }

    createContact(userData);
    clear();
}

function getUserInput() {
    return inputName.value;
}

function isUserInputValid(data) {
    return data !== '';
}

function showError() {
    alert('Field could not be empty');
}

function createContact(data) {
    const html = generateTemplate(data);

    table.insertAdjacentHTML('beforeend', html)
}

function generateTemplate(data) {
    return `
    <table id="contactList">
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th>Action</th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><button id="deleteButton">Delete contact</button></td>
        </tr>
    </table>
    <input id="nameInput" type="text" placeholder="Enter name"/>
    <input id="surnameInput" type="text" placeholder="Enter surname"/>
    <input id="phoneInput" type="text" placeholder="Enter phone"/>
    <button id="AddButton">Add new contact</button>
  `;
}

function clear() {
    input.value = '';
}