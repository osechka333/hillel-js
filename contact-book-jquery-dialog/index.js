const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';
const CONTACT_ITEM_SELECTOR = '.contactItem';
const FORM_DOM_EL = 0;
const ADD_BUTTON_SELECTOR = '#addNewContact';
const MAIN_FORM = 'form';

const $form = $('#newContact');
const $dialogWindow = $("#dialog-window");
const $inputs = $('.formInput');
const $contactContainer = $('#contactContainer');
let contactList = [];

$form.on('click', ADD_BUTTON_SELECTOR, onAddContactBtnClick)
$contactContainer
  .on('click', '.' + DELETE_BTN_CLASS, onContactDeleteClick)
  .on('click', '.' + EDIT_BTN_CLASS, onContactEditClick);

const dialog = $dialogWindow.dialog({
  autoOpen: false,
  height: 400,
  width: 350,
  modal: true,
  buttons: {
    Save: () => {
      const contact = getUserInput(formDetails);

      if (!isContactValid(contact)) {
        showError(new Error('Wrong input data'));
        return;
      }

      saveContact(contact);
      renderContactList(contactList);
    },
    Cancel: function() {
      dialog.dialog('close');
    }
  },
  close: function() {
    dialog.dialog('close');
  }
});

const formDetails = dialog.find(MAIN_FORM)[FORM_DOM_EL];

init();

function init() {
  ContactApi.getList()
    .then((list) => {
      contactList = list;
      renderContactList(list)
    })
    .catch(showError)
}

function onAddContactBtnClick(e) {
  e.preventDefault();
  dialog.dialog('open');
}

function onContactDeleteClick(event) {
  const contactEl = findContactEl($(this));
  const contact = findContactByContactEl(contactEl);

  if (contact) {
    setContactData(contactList.filter((el) => el.id != contact.id))
    ContactApi.delete(contact.id).then(() => {
      alert('Contact was successfully deleted');
      contactEl.remove();
   })
  }
}

function onContactEditClick(e) {
  const $contactEl = findContactEl($(this));
  const contact = findContactByContactEl($contactEl);
  console.log(contact);

  if (contact) {
    e.preventDefault();
    setFormData(contact);
    dialog.dialog('open');
  }
}

function findContactEl($el) {
  return $el.closest(CONTACT_ITEM_SELECTOR);
}

function findContactByContactEl($contactEl) {
  const id = $contactEl.data('id');

  return findContactById(String(id));
}

function setContactData(data) {
  return (contactList = data);
}

function setFormData(contact) {
  for (const input of $inputs) {
    if (Object.hasOwn(contact, input.name)) {
      input.value = contact[input.name];
    }
  }
}

function getUserInput(data) {
  return {
    id: data.id.value,
    firstName: data.firstName.value,
    lastName: data.lastName.value,
    phone: data.phone.value
  }
}

function isContactValid(contact) {
  return !isEmpty(contact.firstName)
    && !isEmpty(contact.lastName)
    && !isEmpty(contact.phone)
    && isPhone(contact.phone);
}

function isEmpty(str) {
  return str === '';
}

function isPhone(phone) {
  return !isNaN(phone);
}

function saveContact(contact) {
  if (contact.id) {
    ContactApi.update(contact.id, contact)
      .then((newContact) => {
        updateKeys(contact.id, newContact);
        replaceContact(contact.id, contact);
        dialogClose();
      })
      .catch(showError)

  } else {
    ContactApi.create(contact)
      .then((newContact) => {
        contactList.push(newContact);
        renderContact(newContact)
        dialogClose();
      })
      .catch(showError)
  }

}

function renderContactList(contacts) {
  const htmlArr = contacts.map(generateHTML);

  $contactContainer.html(htmlArr);
}

function renderContact(contact) {
  const html = generateHTML(contact);

  $contactContainer.append(html);
}

function dialogClose() {
  formDetails.reset();
  dialog.dialog("close");
}

function showError(error) {
  alert(error.message)
}

function findContactById(id) {
  return contactList.find(item => item.id === id);
}

function updateKeys(id, changes) {
  const oldContact = findContactById(id)

  Object.assign(oldContact, changes);
}

function replaceContact(id, contact) {
  const $oldTodoEl = $(`[data-id="${id}"]`);
  const html = generateHTML(contact);

  $oldTodoEl.replaceWith(html);
}

function generateHTML(contact) {
  return `
    <tr class="contactItem" data-id="${contact.id}">
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.phone}</td>
      <td>
        <span>
            <button type="button" class="editBtn">[Edit]</button>
            <button type="button" class="deleteBtn">[Delete]</button>
        </span>
      </td>
    </tr>
  `;
}