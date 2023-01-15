class TodoApi {
    static URL = 'https://639e0c333542a2613055e354.mockapi.io/api/v1/to-do-list/';

    static request(url = '', method = 'GET', body) {
        return fetch(TodoApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not execute request to server');
            })
    }

    static getList() {
        return TodoApi.request()
            .catch(() => {
                throw new Error('Can not fetch contact list from server');
            })
    }

    static create(contact) {
        return TodoApi.request('', 'POST', contact)
            .catch(() => {
                throw new Error('Can not create contact on server');
            })
    }

    static update(id, changes) {
        return TodoApi.request(id, 'PUT', changes)
            .catch(() => {
                throw new Error('Can not update contact on server');
            })
    }

    static delete(id) {
        return TodoApi.request(id, 'DELETE')
            .catch(() => {
                throw new Error('Can not delete contact on server');
            })
    }
}