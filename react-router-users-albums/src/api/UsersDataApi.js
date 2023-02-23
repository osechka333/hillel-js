export default class UsersDataApi {
    static URL = 'https://jsonplaceholder.typicode.com/';

    static request(url = '', method = 'GET', body) {
        return fetch(UsersDataApi.URL + url, {
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
        return UsersDataApi.request('users/')
            .catch(() => {
                throw new Error('Can not fetch the user list from the server');
            })
    }
    static getAlbumPerUser(id) {
        return UsersDataApi.request(`albums?userId=${id}`)
            .catch(() => {
                throw new Error('Can not fetch the user details from the server');
            })
    }
    static getPhotosPerAlbum(id) {
        return UsersDataApi.request(`photos?albumId=${id}`)
            .catch(() => {
                throw new Error('Can not fetch the user details from the server');
            })
    }
}