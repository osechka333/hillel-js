export default class PhotosApi {
    static URL = 'https://jsonplaceholder.typicode.com/photos';

    static request(url = '', method = 'GET', body) {
        return fetch(PhotosApi.URL + url, {
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

                throw new Error('Can not retrieve photos from the server');
            })
    }

    // static getList() {
    //     return UsersApi.request()
    //         .catch(() => {
    //             throw new Error('Can not fetch the user list from the server');
    //         })
    // }

    static getPhotosPerAlbum(id) {
        return PhotosApi.request(`?albumId=${id}`)
            .catch(() => {
                throw new Error('Can not fetch the user details from the server');
            })
    }
}