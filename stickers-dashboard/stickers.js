const DEFAULT_NOTE = 0;
const $form = $('.dashboard-form-wrapper');
const $stickersContainer = $('#stickersContainer');

let notesList = [];

init();

function init() {
    Dashboard.getNotesList().then((list) => {
        const notes = list[DEFAULT_NOTE].id;
        console.log(notes);

        displayList(list);
    })
        .catch(displayWarning);
}

function displayList(list) {
    const html = list.map(generateHTML).join('');
    $stickersContainer.html(html);
}
function generateHTML(data) {
    return `
          <li class="notes" data-id="${data.id}>
            <a href="#">
                <h2>Note: ${data.id}</h2>
                <p>${data.description}</p>
            </a>
             <button id="deleteBtn" class="glyphicon glyphicon-remove"></button>
          </li>
  `;
}
function displayWarning(e) {
    alert(e.message);
}