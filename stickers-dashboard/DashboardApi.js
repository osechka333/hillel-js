class Dashboard {
    static requestUrl = 'https://62054479161670001741b708.mockapi.io/api/stickers';

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

    static getNotesList() {
        return this
            .request(this.requestUrl)
            .catch(() => {
                throw new Error(`Failed to get the list of notes`);
            });
    }

}