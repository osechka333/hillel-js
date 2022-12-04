class Accordion {
    static FIRST_ACCORDION_ITEM = 0;
    static ITEM_CLASS = 'accordion-item';
    static ITEM_HEADER_CLASS = 'accordion-item-header';
    static ITEM_CONTENT_CLASS = 'accordion-item-content'
    static ITEM_OPEN_CLASS = 'open';

    constructor(rootEl, defaultOpenIndex = Accordion.FIRST_ACCORDION_ITEM) {
        this.rootEl = rootEl;
        this.accordionItems = Array.from(this.rootEl.children);

        this.bindStyles();
        this.bindEvents();
        this.openContentByIndex(defaultOpenIndex);

    }
    bindStyles() {
        this.accordionItems.forEach((accordionItem) => {
            // const header = accordionItem.children[0];
            // const content = accordionItem.children[1];
            // use destructuring =>
            const [ header, content ] = accordionItem.children;

            //accordionItem.className = 'accordion-item'; //overwrite all class names
            accordionItem.classList.add(Accordion.ITEM_CLASS);
            header.classList.add(Accordion.ITEM_HEADER_CLASS);
            content.classList.add(Accordion.ITEM_CONTENT_CLASS);
        })
    }
    bindEvents() {
        // this.rootEl.addEventListener('click', this.onRootElClick.bind(this)); // bind context - if the function lost it - error - is not a function
        this.rootEl.addEventListener('click', e => this.onRootElClick(e));
    }

    onRootElClick(e){
        const header = e.target.closest('.' + Accordion.ITEM_HEADER_CLASS);

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
        const accordionItemEl = e.closest('.' + Accordion.ITEM_CLASS);

        return accordionItemEl.querySelector('.' + Accordion.ITEM_CONTENT_CLASS);
    }

    toggleContent(contentEl) {
        contentEl.classList.toggle(Accordion.ITEM_OPEN_CLASS);
    }

    openContentByIndex(index){
        const content = this.getContentEl(this.accordionItems[index]);

        this.toggleContent(content);
    }

    closeContent(contentEl){
        contentEl.classList.remove(Accordion.ITEM_OPEN_CLASS);
    }

    getOpenEl(){
        return this.rootEl.querySelector('.' + Accordion.ITEM_OPEN_CLASS);
    }
}