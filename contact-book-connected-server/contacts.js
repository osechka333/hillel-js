'use strict'

const CONTACT_SELECTOR = '.contactItem';
const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';

const addButton = document.querySelector('#addButton');
const table = document.querySelector('#contactList');
const tableRow = document.querySelector('#contactData')
const inputs = document.querySelectorAll('.formInput');
const inputName = document.querySelector('#nameInput');
const inputSurname = document.querySelector('#surnameInput');
const inputPhone = document.querySelector('#phoneInput');
let contactList = [];

addButton.addEventListener('click', onAddButtonClick);
table.addEventListener('click', onContainerClick);

getServerData();

function getServerData() {
    ContactServer.getContactList().then((list) => {
        contactList = list;
        displayContactList(contactList);
    })
}

function displayContactList(list) {
    const html = list.map(generateContactHtml).join('');

    tableRow.innerHTML = html;
}

function generateContactHtml(item){
    return `
        <tr class="contactItem" data-id="${item.id}">
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.phone}</td>
            <td>
            <span>
                <button class="editButton">Edit contact</button>
                <button class="deleteButton">Remove</button>
           </span>
        </tr>
    </table>
  `;
}

function onAddButtonClick(e) {
    e.preventDefault();

    const userContact = getContactData();

    if (!isUserInput(userContact)) {
        showError();
        return;
    }

    saveContact(userContact);
    clear();
}


function onContainerClick(e) {
    const contactEl = e.target.closest(CONTACT_SELECTOR);
    const id = contactEl.dataset.id;
    const contact = findContactById(id);

    if (contact) {
        if (e.target.classList.contains(DELETE_BTN_CLASS)) {
            contactEl.remove();
        } else if (e.target.classList.contains(EDIT_BTN_CLASS)) {
            setFormData(contact)
        }
    }
}

function getContactData() {
    const userContact = {};
    for (const { name, value } of inputs) {
        userContact[name] = value;
    }
    return userContact;
}

function setFormData(contact) {
    for (const input of inputs) {
        if (Object.hasOwn(contact, input.name)) {
            input.value = contact[input.name];
        }
    }
}

function isUserInput(input) {
    return input !== '';
}

function showError() {
    alert('Fields could not be empty');
}

function saveContact(contact) {
    if (contact.id) {
        ContactServer.updateContact(contact.id, contact)
            .then((newContact) => {
                updateKeys(contact.id, newContact);
                clearForm();
            })
            .catch(showError)

        replaceContact(contact.id, contact);
    } else {
        ContactServer.createContact(contact)
            .then((newContact) => {
                contactList.push(newContact);
                displayContact(newContact)
                clearForm();
            })
            .catch(showError)
    }

}
function displayContact(name, surname, phone) {
    const html = generateContactHtml(name, surname, phone);

    tableRow.insertAdjacentHTML('beforeend', html);
}

function findContactById(id) {
    return contactList.find(item => item.id === id);
}

function updateKeys(id, changes) {
    const oldContact = findContactById(id)

    Object.keys(changes).forEach(key => oldContact[key] = changes[key]);
}

function replaceContact(id, contact) {
    const oldContact = document.querySelector(`[data-id="${id}"]`);
    const html = generateHTML(contact);

    oldContact.outerHTML = html;
}

function clear() {
    inputName.value = '';
    inputSurname.value = '';
    inputPhone.value = '';
}