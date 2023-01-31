const studentsContainer = document.querySelector('#studentsList');
const studentsForm =  document.querySelector('#studentsForm');

studentsForm.addEventListener('submit', onStudentFormSubmit);
studentsContainer.addEventListener('click', onStudentListClick);
studentsContainer.addEventListener('focusout', onStudentListFocusOut);

StudentMarksApi
    .getList()
    .then(renderStudentList);

function onStudentFormSubmit(e) {
    e.preventDefault();

    const newStudentName = getStudentNameInForm();

    StudentMarksApi
        .create(newStudentName)
        .then((newName) => {
            addStudentToList(newName)
        })

    clearUserFormInput();
}

function onStudentListClick(e) {
    const studentEl = getStudentId(e.target);
    const studentId = studentEl.dataset.id;

    if(studentId && e.target.classList.contains('delete')) {
        StudentMarksApi
            .delete(studentId)
            .then(() => {
                studentEl.remove();
            })
    }
}

function onStudentListFocusOut(e) {
    const studentEl = getStudentId(e.target);
    const studentId = studentEl.dataset.id;

    if(studentId && e.target.classList.contains('mark-input')) {
        const marks = getStudentMarks(studentEl);
        StudentMarksApi
            .update(studentId, {marks})
            .then(() => {
                alert('Student marks are updated');
            }
        );
    }
}

function getStudentNameInForm() {
    return {
        name: studentsForm.name.value
    }
}

function getStudentId(el) {
    return el.closest('.student-item');
}

function getStudentMarks(el) {
    return Array
        .from(el.querySelectorAll('.mark-input'))
        .map(input => Number(input.value));
}

function renderStudentList(list) {
    const html = list.map(generateStudentHtml).join('');
    studentsContainer.innerHTML = html;
}

function addStudentToList(newStudent) {
    const html = generateStudentHtml(newStudent);
    studentsContainer.insertAdjacentHTML('beforeend', html);
}

function generateStudentHtml(student) {
    return `
        <tr data-id="${student.id}" class="student-item">
             <td>${student.name}</td>
            ${generateStudentMarks(student.marks)}
             <td>
                <button class="delete">Delete</button>
            </td>
        </tr>`;
}

function generateStudentMarks(marks) {
    return marks.reduce((acc, mark) => {
        return acc + `
            <td>
                <input class="mark-input" type="text" value="${mark}">
            </td>`;
    }, '');
}

function clearUserFormInput() {
    studentsForm.reset();
}

