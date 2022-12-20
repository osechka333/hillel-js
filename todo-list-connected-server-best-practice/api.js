class TodoApi {
    static URL = 'https://639e0c333542a2613055e354.mockapi.io/api/v1/to-do-list/';

    static getList() {
        return fetch(TodoApi.URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not fetch todo list from server');
            })
    }

    static create(todo) {
        return fetch(TodoApi.URL, {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not create todo on server');
            })
    }

    static update(id, changes) {
        return fetch(TodoApi.URL + id, {
            method: 'PUT',
            body: JSON.stringify(changes),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not update todo on server');
            })
    }

    static delete(id) {
        return fetch(TodoApi.URL + id, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not delete todo on server');
            })
    }
}