const addButton = document.querySelector('#addButton');
const table = document.querySelector('#contactList');
const tableRow = document.querySelector('#contactData')
const inputName = document.querySelector('#nameInput');
const inputSurname = document.querySelector('#surnameInput');
const inputPhone = document.querySelector('#phoneInput');

addButton.addEventListener('click', onAddButtonClick);
table.addEventListener('click', onDeleteButtonClick);

createContact('Olha','UserName Default','008');

function onAddButtonClick() {
    const name = getData(inputName);
    const surname = getData(inputSurname);
    const phone = getData(inputPhone);

    if (!isUserInput(name && surname && phone)) {
        showError();
        return;
    }

    createContact(name, surname, phone);
    clear();
}


function onDeleteButtonClick(event) {
    if (event.target.classList.contains('deleteButton')) {
        const contactItem = event.target.closest('.contactItem');

        contactItem.remove();
    }
}

function getData(input) {
    return input.value;
}

function isUserInput(input) {
    return input !== '';
}

function showError() {
    alert('Fields could not be empty');
}

function createContact(name, surname, phone) {
    const html = generateTemplate(name, surname, phone);

    tableRow.insertAdjacentHTML('beforeend', html);
}

function generateTemplate(name, surname, phone) {
    return `
        <tr class="contactItem">
            <td>${name}</td>
            <td>${surname}</td>
            <td>${phone}</td>
            <td><button class="deleteButton">Delete contact</button></td>
        </tr>
    </table>
  `;
}

function clear() {
    inputName.value = '';
    inputSurname.value = '';
    inputPhone.value = '';
}