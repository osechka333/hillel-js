'use strict'

const DELETE_BUTTON = 'deleteBtn';
const UPDATE_BUTTON = 'editBtn';
const CONTACT_ITEM = '.contactItem';

const form = document.querySelector('#contactForm');
const inputs = document.querySelectorAll('.formInput');
const contactContainer = document.querySelector('#contactDataContainer');

displayContactList({firstName: 'olha', lastName: 'pokolenko', phone: '+38098'});

form.addEventListener('submit', onAddButtonClick);
contactContainer.addEventListener('click', onContainerClick);

function onAddButtonClick(e) {
    e.preventDefault();

    const userInput = getContact();
    console.log(userInput);

    if(!isContactValid(userInput)) {
        alert('Wrong values specified. Please specify the valid data');
        return;
    } else {
        displayContactList(userInput);
        clearInput();
    }
}

function onContainerClick(e) {
    console.log(e);
    if (e.target.classList.contains(DELETE_BUTTON)) {
        const contactEl = e.target.closest(CONTACT_ITEM)
        contactEl.remove();
    } else if (e.target.classList.contains(UPDATE_BUTTON)) {
        e.preventDefault();

        e.target.style.color = 'green';
    }
}

function getContact() {
    const contact = {};
    for (const { name, value } of inputs) {
        contact[name] = value;
    }
    return contact;
}

function isContactValid(data) {
    return !isEmpty(data.firstName)
        && !isEmpty(data.lastName)
        && !isEmpty(data.phone)
        && isPhone(data.phone)
}

function displayContactList(data) {
    const html = generateHTML(data);

    contactContainer.insertAdjacentHTML('beforeend', html);
}

function generateHTML(contact) {
    return `
    <tr class="contactItem">
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