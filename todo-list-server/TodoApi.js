class TodoApi {
    static apiUrl = 'https://639e0c333542a2613055e354.mockapi.io/api/v1/to-do-list/';

    static getList() {
        return fetch(TodoApi.apiUrl).then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Not possible to retrieve the data')
        })
    }

    static create(item) {
        return fetch(TodoApi.apiUrl, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Not possible to save the data on server')
        })
    }

    static delete(id) {
        return fetch(TodoApi.apiUrl + id, {
            method: 'DELETE'
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Not possible to remove the item on server')
            })
    }
}