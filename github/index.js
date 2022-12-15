const userAPI = 'https://api.github.com/users/{{name}}';

const userForm = document.querySelector('#userForm');
const userInput = document.querySelector('#input');
const userDetails = document.querySelector('#userContainer');
const userTemplate = document.querySelector('#userTemplate');

userForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const userName = userInput.value;
    getUserData(userName)
        .then(user => {
            renderUserData(user);
        })
        .catch((error) => {
            alert(error.message);
        });
    clearInput();
}
function getUserData(name) {
    return fetch(userAPI.replace('{{name}}', name))
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error('No found user. Please specify an another username');
        })
}
function renderUserData(user) {
    const html = generateHtml(user);

    userDetails.innerHTML = html;
}

function generateHtml(user) {
    return userTemplate.innerHTML
        .replace('{{avatar_url}}', user.avatar_url)
        .replace('{{public_repos}}', user.public_repos)
        .replace('{{id}}', user.id)

}

function clearInput() {
    userForm.reset();
}