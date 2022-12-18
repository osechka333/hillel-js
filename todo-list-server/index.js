'use strict'

const DELETE_BTN_CLASS = 'deleteBtn';
const TODO_ITEM_SELECTOR = '.todoItem';
const DONE_CLASS = 'done';

const ul = document.querySelector('#todoList');
const input = document.querySelector('#input');
const form = document.querySelector('#todoForm');

form.addEventListener('submit', onFormSubmit);
ul.addEventListener('click', onUlClick)

generateList();

function generateList() {
    TodoApi.getList()
        .then((list) => {
        renderList(list);
        })
}

function renderList(list) {
    const html = list.map(generateHTML).join('');
    ul.innerHTML = html;
}

function createTodo(list) {
    const html = generateHTML(list);
    ul.insertAdjacentHTML('beforeend', html);
}

function onFormSubmit(e) {
    e.preventDefault();

    const item = getTodoItem();

    if (!isItemValid(item)) {
        alert('The field could not be empty');
        return;
    }

    createTodo(item);

    TodoApi.create(item).then((newItem) => {
        renderList(newItem);
    })
    clear();
}

function onUlClick(e) {
    const todoItem = getItem(e.target);
    const id = getItemId(todoItem);

    if (todoItem) {
        if (e.target.classList.contains(DELETE_BTN_CLASS)) {
            TodoApi.delete(id).then(() => {
                todoItem.remove();
            })
            return;
        }

        todoItem.classList.toggle(DONE_CLASS);
    }
}

function isItemValid(item) {
    return item !== '';
}

function getTodoItem() {
    return {
        title: input.value
    };
}

function generateHTML(item) {
    return `
  <li class="todoItem" data-id="${item.id}">
    <span>${item.title}</span>
    <button class="deleteBtn">Delete</button>
  </li>
  `
}

function getItem(el) {
    return el.closest(TODO_ITEM_SELECTOR);
}

function getItemId(el) {
    return el.dataset.id;
}


function clear() {
    form.reset()
}