class FormView {
    static INPUTS_SELECTOR = 'input, textarea';

    constructor(options) {
        this.options = options;
        this.$root = this.initView();
        this.$inputs = this.$root.find(FormView.INPUTS_SELECTOR);
    }

    initView() {
        return $(`
      <form id="todoForm">
          <input id="id" type="hidden"/>
          <input id="title" type="text" placeholder="Enter the text"/>
          <button>SAVE</button>
      </form>
    `)
            .on('submit', this.onFormSubmit.bind(this));
    }

    onFormSubmit(e) {
        e.preventDefault();

        const data = this.getFormData();

        if(!this.isEmpty(data)) {
            this.options.onSubmit(data);
            this.clearInput();
        }  else {
            alert('This field could not be empty');
        }
    }

    appendTo($container) {
        $container.append(this.$root)
    }

    getFormData() {
        const data = {}

        for (const input of this.$inputs) {
            data[input.id] = input.value;
        }

        return  data;
    }

    setFormData(data) {
        for (const input of this.$inputs) {
            const inputId = input.id;

            if (inputId in data) {
                input.value = data[inputId];
            }
        }
    }

    isEmpty(str) {
        return str.title === '';
    }

    clearInput() {
        for (const input of this.$inputs) {
            input.value = '';
        }
    }
}