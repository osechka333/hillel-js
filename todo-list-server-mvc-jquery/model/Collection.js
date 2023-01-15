class Collection {
    #list = [];

    fetch() {
        return TodoApi.getList()
            .then((list) => {
                this.#list = list;
                return this.#list;
            })
    }

    save(item) {
        if(item.id) {
            return TodoApi.update(item.id, item)
                .then((newItem) => {
                    this.updateItemKeys(item.id, newItem)

                    return newItem;
                })
        }

        return TodoApi.create(item)
            .then((createdItem) => {
                this.#list.push(createdItem);

                return createdItem;
            })

    }

    delete(id) {
        return TodoApi.delete(id)
            .then((deletedItem) => {
                this.setData(this.#list.filter((el) => el.id != deletedItem.id));
            })
}

    updateItemKeys(id, changes) {
        const oldItem = this.get(id);

        Object.assign(oldItem, changes);
    }

    get(id) {
        return this.#list.find(item => item.id === id);
    }

    setData(data) {
        return (this.#list = data);
    }
}