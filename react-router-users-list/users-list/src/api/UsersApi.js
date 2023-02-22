export default class UsersApi {
    static URL = 'https://jsonplaceholder.typicode.com/users/';

    static request(url = '', method = 'GET', body) {
        return fetch(UsersApi.URL + url, {
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

                throw new Error('Can not retrieve users from the server');
            })
    }

    static getUserList() {
        return UsersApi.request()
            .catch(() => {
                throw new Error('Can not fetch the user list from the server');
            })
    }

    static getUser(id) {
        return UsersApi.request(id)
            .catch(() => {
                throw new Error('Can not fetch the user details from the server');
            })
    }
}