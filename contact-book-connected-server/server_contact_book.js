'use strict'

const DELETE_BUTTON = 'deleteBtn';
const UPDATE_BUTTON = 'editBtn';
const CONTACT_ITEM = '.contactItem';

const form = document.querySelector('#contactForm');
const inputs = document.querySelectorAll('.formInput');
const contactContainer = document.querySelector('#contactDataContainer');

form.addEventListener('submit', onAddButtonClick);
contactContainer.addEventListener('click', onContainerClick);

let contactList = [];

displayServerInitContactList();

function displayServerInitContactList() {
    Contacts.getContactList().then(list => {
        contactList = list;
        renderServerContactList(contactList);
    })
        .catch(displayErrorMessage);
}

function renderServerContactList(data) {
    const html = data.map(generateHTML).join('');

    contactContainer.innerHTML = html;
}

function onAddButtonClick(e) {
    e.preventDefault();

    const userInput = getUserInput();

    if(!isUserInputValid(userInput)) {
        displayErrorMessage(new Error('Please specify the valid data and the actual phone'));
        return;
    } else {
        saveContact(userInput);
        clearInput();
    }
}

function onContainerClick(e) {
    const contactEl = e.target.closest(CONTACT_ITEM);
    const contactId = contactEl.dataset.id;
    const contact = findContactById(contactId);
    if(contact) {
        if (e.target.classList.contains(DELETE_BUTTON)) {
            contactEl.remove();
        } else if (e.target.classList.contains(UPDATE_BUTTON)) {
            e.target.style.color = 'green';
            fillForm(contact);
        }
    }
}

function getUserInput() {
    const contact = {};
    for (const { name, value } of inputs) {
        contact[name] = value;
    }
    return contact;
}

function isUserInputValid(data) {
    return !isEmpty(data.firstName)
        && !isEmpty(data.lastName)
        && !isEmpty(data.phone)
        && isPhone(data.phone)
}

function renderContact(data) {
    const html = generateHTML(data);

    contactContainer.insertAdjacentHTML('beforeend', html);
}

function generateHTML(contact) {
    return `
    <tr class="contactItem" data-id="${contact.id}">
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.phone}</td>
      <td>
        <span>
            <button type="button" class="editBtn">Edit</button>
            <button type="button" class="deleteBtn">Remove</button>
        </span>
      </td>
    </tr>
  `;
}

function isEmpty(str) {
    return str === '';
}
function isPhone(str) {
    return !isNaN(str);
}
function clearInput() {
    form.reset();
}

function saveContact(contact) {
    if (contact.id) {
        Contacts.updateContact(contact.id, contact)
            .then((updatedContact) => {
                updateKeys(contact.id, updatedContact);
                clearInput();
            })
            .catch(displayErrorMessage);
        replaceContact(contact.id, contact);
    }
    Contacts.createContact(contact)
        .then((newContact) => {
            contactList.push(newContact);
            renderContact(newContact);
            clearInput();
    })
        .catch(displayErrorMessage);
}

function findContactById(id) {
    return contactList.find(item => item.id === id);
}
function fillForm(contact) {
    for (const input of inputs) {
        if(Object.hasOwn(contact, input.name)) {
            input.value = contact[input.name];
        }
    }
}
function updateKeys(id, newContact) {
    const oldContact = findContactById(id);

    Object.keys(newContact).forEach(key => oldContact[key] = newContact[key]);
}
function replaceContact(id, newContact) {
    const oldContact = document.querySelector(`[data-id="${id}"]`);
    const contactHtml = generateHTML(newContact);

    oldContact.outerHTML = contactHtml;
}
function displayErrorMessage(e) {
    alert(e.message);
}
