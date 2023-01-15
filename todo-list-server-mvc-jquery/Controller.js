class Controller {
    constructor($root) {
        this.collection = new Collection();
        this.listView = new ListView({
            onEdit: id => this.formView.setFormData(this.collection.get(id)),
            onDelete: id => this.delete(id)
        });
        this.formView = new FormView({
            onSubmit: (item) => this.save(item)
        });

        this.listView.appendTo($root);
        this.formView.appendTo($root);

        this.collection
            .getData()
            .then((list) => {
                this.listView.renderList(list);
            })
    }

    save(item) {
        this.collection
            .save(item)
            .then((newItem) => {
                if(item.id) {
                    this.listView.replaceItem(newItem.id, newItem);
                } else {
                    this.listView.renderItem(newItem);
                }
            });
    }
    delete(id) {
        this.collection
            .delete(id)
            .then(()=>{
                this.listView.remove(id);
            })
    }
}