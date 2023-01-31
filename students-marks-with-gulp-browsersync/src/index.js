import StudentMarksApi from "./StudentMarksApi.js";

const studentsContainer = document.querySelector("#studentsList");

StudentMarksApi.getList().then((list) => renderStudentList(list));

function renderStudentList(list) {
    const html = list.map(generateStudentHtml).join('');
    studentsContainer.innerHTML = html;
}

function generateStudentHtml(student) {
    return `
        <tr data-id="{{id}}" className="student-item">
             <td>${student.name}</td>
            ${generateStudentMarks(student.marks)}
             <td>
                <button className="delete">Delete</button>
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

