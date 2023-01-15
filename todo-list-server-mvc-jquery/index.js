'use strict'

new Controller($('#root'));

// const UPDATE_BTN_CLASS = 'editBtn';
// const DELETE_BTN_CLASS = 'deleteBtn';
// const TODO_ITEM_SELECTOR = '.todoItem';
// const DONE_CLASS = 'done';
// const TITLE_CLASS = 'title';
//
// const ul = $('#todoList');
// const idInput = $('#id');
// const titleInput = $('#title');
// const form = $('#todoForm');
// let itemsList = [];
//
// form.addEventListener('submit', onFormSubmit);
// ul.addEventListener('click', onUlClick)
//
// generateList();
//
// function generateList() {
//     TodoApi.getList()
//         .then((list) => {
//             itemsList = list;
//             renderList(list);
//         })
// }
//
// function onFormSubmit(e) {
//     e.preventDefault();
//
//     const item = getToDoItem();
//
//     if (!isItemValid(item)) {
//         alert('The field could not be empty');
//         return;
//     }
//     if(item.id) {
//         TodoApi.update(item.id, item).then((newItem) => {
//                 updateObjectKeys(item.id, newItem);
//                 clear();
//         }).catch(showWarningMessage);
//         updateItem(item.id, item);
//     } else {
//         TodoApi.create(item).then((newItem) => {
//             itemsList.push(newItem);
//             renderItem(newItem);
//             clear();
//         }).catch(showWarningMessage);
//     }
// }
//
// function onUlClick(e) {
//     const todoItem = getItem(e.target);
//     const id = getItemId(todoItem);
//     const itemValue = findItemById(id);
//
//     if (todoItem) {
//         if (e.target.classList.contains(DELETE_BTN_CLASS)) {
//             TodoApi.delete(id);
//             todoItem.remove();
//         } else if (e.target.classList.contains(UPDATE_BTN_CLASS)) {
//             addValuesToForm(itemValue);
//         } else if (e.target.classList.contains(TITLE_CLASS)) {
//             TodoApi.update(id, {done: !itemValue.done });
//             toggleDone(todoItem);
//         }
//     }
// }
//
// function isItemValid(item) {
//     return item !== '';
// }
//
// function renderList(list) {
//     const html = list.map(generateHTML).join('');
//     ul.innerHTML = html;
// }
//
// function renderItem(todo) {
//     const html = generateHTML(todo);
//
//     ul.insertAdjacentHTML('beforeend', html);
// }
//
// function addValuesToForm(todo) {
//     idInput.value = todo.id;
//     titleInput.value = todo.title;
// }
//
// function toggleDone(todoItem) {
//     todoItem.querySelector('.' + TITLE_CLASS).classList.toggle(DONE_CLASS);
// }
//
// function getToDoItem() {
//     const id = idInput.value;
//     const item = findItemById(id) || {};
//     return {
//         id: idInput.value,
//         done: false,
//         ...item,
//         title: titleInput.value
//     };
// }
//
// function generateHTML(item) {
//     const done = item.done ? ' done' : '';
//
//     return `
//     <li class="todoItem" data-id="${item.id}">
//       <span class="title${done}">${item.title}</span>
//       <button class="editBtn">Edit</button>
//       <button class="deleteBtn">Delete</button>
//     </li>
//   `;
// }
//
// function getItem(el) {
//     return el.closest(TODO_ITEM_SELECTOR);
// }
//
// function getItemId(el) {
//     return el.dataset.id;
// }
//
// function findItemById(id) {
//     return itemsList.find(item => item.id === id);
// }
//
// function updateItem(id, item) {
//     const oldData = document.querySelector(`[data-id="${id}"]`);
//     const itemHtml = generateHTML(item);
//
//     oldData.outerHTML = itemHtml;
// }
//
// function updateObjectKeys(id, newData) {
//     const oldData = findItemById(id);
//     Object.keys(newData).forEach( key => oldData[key] = newData[key]);
// }
//
// function clear() {
//     idInput.value = '';
//     titleInput.value = '';
// }
//
// function showWarningMessage(e) {
//     alert(e.message);
// }