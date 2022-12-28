class Contacts {
    static requestUrl = 'https://639e0c333542a2613055e354.mockapi.io/api/v1/contacts_book/';

    static request(url = '', method = 'GET', body) {
        return fetch(Contacts.requestUrl + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if(res.ok) {
                return res.json();
            }
            throw new Error('Could not execute the request on server');
        })
    }

    static getContactList() {
        return Contacts.request()
            .catch(() => {
            throw new Error('Could not retrieve the contact list from the server');
        })
    }

    static createContact(userContact) {
        return Contacts.request('','POST', userContact)
            .catch(()=> {
            throw new Error('Failed to create the contact on the server');
        })
    }

    static updateContact(id, newContact) {
        console.log(newContact)
        return Contacts.request(id, 'PUT', newContact)
            .catch(()=> {
            throw new Error('Failed to update the contact on the server');
        })
    }
    static deleteContact(id) {
        return Contacts.request(id, 'DELETE')
            .catch(()=> {
            throw new Error('Failed to delete the contact on the server');
        })
    }
}