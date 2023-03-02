import StudentsApi from './StudentsApi.js';
import './index.css';

// import studentItemHtml from './studentItemHtml.html';

const studentListEl = document.querySelector('#studentList');
const studentFormEl = document.querySelector('#studentForm');

studentFormEl.addEventListener('submit', onStudentFormSubmit)
studentListEl.addEventListener('click', onStudentListClick)
studentListEl.addEventListener('focusout', onStudentListFocusOut)

StudentsApi
  .getList()
  .then(renderList)


function onStudentFormSubmit(e) {
  e.preventDefault();

  const student = getStudent();

  if (!isStudentValid(student)) {
    alert('Invalid student name');
  }

  StudentsApi
    .create(student)
    .then(renderOne)
}

function onStudentListClick(e) {
  const studentEl = getStudentEl(e.target);
  const id = getStudentElId(studentEl);

  if (id && e.target.classList.contains('deleteBtn')) {
    StudentsApi
      .delete(id)
      .then(() => {
        studentEl.remove();
      })
  }
}

function onStudentListFocusOut(e) {
  const studentEl = getStudentEl(e.target);
  const id = getStudentElId(studentEl);

  if (id && e.target.classList.contains('markInput')) {
    const marks = getAllMarks(studentEl);

    StudentsApi.update(id, { marks });
  }
}

function getAllMarks(el) {
  return Array
    .from(el.querySelectorAll('.markInput'))
    .map(input => Number(input.value));
}

function getStudentEl(el) {
  return el.closest('.studentItem');
}

function getStudentElId(el) {
  return el.dataset.id;
}

function getStudent() {
  return {
    id: studentFormEl.id.value,
    name: studentFormEl.name.value,
  };
}

function isStudentValid(student) {
  return true;
}

function renderList(list) {
  const html = list.map(generateStudentHtml).join('');

  studentListEl.innerHTML = html;
}

function renderOne(student) {
  const html = generateStudentHtml(student);

  studentListEl.insertAdjacentHTML('beforeend', html)
}

// function generateStudentHtml(student) {
//   return studentItemHtml.replace();
// }

function generateStudentHtml(student) {
  return `
  <tr data-id="${student.id}" class="studentItem">
    <td>${student.name}</td>
    ${generateStudentMarks(student.marks)}
    <td>
      <button class="deleteBtn">Delete</button>
    </td>
  </tr>
  `;
}

function generateStudentMarks(marks) {
  return marks.reduce((acc, mark) => {
    return acc + `
      <td>
        <input class="markInput" type="text" value="${mark}">
      </td>
    `;
  }, '');
}