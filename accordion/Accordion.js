class Accordion {
    constructor(rootEl) {
        this.rootEl = rootEl;

        this.accordionItems = Array.from(this.rootEl.children);

        this.bindStyles();
        this.bindEvents();

    }
    bindStyles() {
        this.accordionItems.forEach((accordionItem) => {
            // const header = accordionItem.children[0];
            // const content = accordionItem.children[1];
            // use destructuring =>
            const [ header, content ] = accordionItem.children;

            //accordionItem.className = 'accordion-item'; //overwrite all class names
            accordionItem.classList.add('accordion-item');
            header.classList.add('accordion-item-header');
            content.classList.add('accordion-item-content');
        })
    }
    bindEvents() {
        // this.rootEl.addEventListener('click', this.onRootElClick.bind(this)); // bind context - if the function lost it - error - is not a function
        this.rootEl.addEventListener('click', e => this.onRootElClick(e));
    }

    onRootElClick(e){
        const header = e.target.closest('.accordion-item-header');

        if (header) {
            const contentEl = this.getContentEl(e.target);
            const contentOpenEl = this.getOpenEl(e.target)

            if(contentOpenEl && contentEl !== contentOpenEl) {
                this.closeContent(contentOpenEl);
            }

            this.toggleContent(contentEl);
        }

    }

    getContentEl(e) {
        const accordionItemEl = e.closest('.accordion-item');

        return accordionItemEl.querySelector('.accordion-item-content');
    }

    toggleContent(contentEl) {
        contentEl.classList.toggle('open');
    }

    // openContent(contentEl){
    //     contentEl.classList.add('open');
    // }

    closeContent(contentEl){
        contentEl.classList.remove('open');
    }

    getOpenEl(){
        return this.rootEl.querySelector('.open');
    }
}