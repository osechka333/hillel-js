class ContactApi {
    static URL = 'https://639e0c333542a2613055e354.mockapi.io/api/v1/contacts_book/';

    static request(url = '', method = 'GET', body) {
        return fetch(ContactApi.URL + url, {
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
        return ContactApi.request()
            .catch(() => {
                throw new Error('Can not fetch contact list from server');
            })
    }

    static create(contact) {
        return ContactApi.request('', 'POST', contact)
            .catch(() => {
                throw new Error('Can not create contact on server');
            })
    }

    static update(id, changes) {
        return ContactApi.request(id, 'PUT', changes)
            .catch(() => {
                throw new Error('Can not update contact on server');
            })
    }

    static delete(id) {
        return ContactApi.request(id, 'DELETE')
            .catch(() => {
                throw new Error('Can not delete contact on server');
            })
    }
}