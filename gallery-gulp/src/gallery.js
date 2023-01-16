class Gallery {
    static ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums/';
    static PHOTOS_URL = 'https://jsonplaceholder.typicode.com/albums/id/photos';

    static request(url = '', method = 'GET', body) {
        return fetch(url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(`Failed request with the status: ${response.status}`);
            })
    }

    static getAlbumsList() {
        return this
            .request(this.ALBUMS_URL)
            .catch(() => {
                throw new Error(`Failed to get the list of albums`);
            });
    }

    static getAlbumPhotosList(albumId) {
        const newUrl = this.PHOTOS_URL.replace('id', albumId);
        return Gallery
            .request(newUrl)
            .catch(() => {
                throw new Error(`Failed to get the photos of the album`);
            });
    }
}