class Dashboard {
    static requestUrl = 'https://639e0c333542a2613055e354.mockapi.io/api/v1/stickers/';

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

    static getStickersList() {
        return this
            .request(this.requestUrl)
            .catch((response) => {
                throw new Error(`Failed to get the list of stickers: : ${response.status}`);
            });
    }

    static delete(id) {
        return this
            .request(this.requestUrl + id, 'DELETE')
            .catch((response) => {
                throw new Error(`Failed to remove the sticker: : ${response.status}`);
            })
    }

    static create(data) {
        return this
            .request(this.requestUrl, 'POST', data)
            .catch((response) => {
            throw new Error(`Failed to create the sticker: : ${response.status}`);
        })
    }

}