export default class AlbumsApi {
    static URL = 'https://jsonplaceholder.typicode.com/albums';

    static request(url = '', method = 'GET', body) {
        return fetch(AlbumsApi.URL + url, {
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

                throw new Error('Can not retrieve albums from the server');
            })
    }

    static getAlbumsList() {
        return AlbumsApi.request()
            .catch(() => {
                throw new Error('Can not fetch the user list from the server');
            })
    }

    static getAlbumPerUser(id) {
        return AlbumsApi.request(`?/userId=${id}`)
            .catch(() => {
                throw new Error('Can not fetch the user details from the server');
            })
    }
}