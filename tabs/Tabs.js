class Tabs {
    static DEFAULT_OPENED_TAB = 0;
    static MAIN_TAB_CLASS = 'tab';
    static NAV_TAB = 'nav';
    static TAB_CLASS = 'tab-button';
    static TAB_CONTENT_CLASS = 'tab-content';
    static ACTIVE_TAB_CLASS = 'active';
    static OPENED_CONTENT_CLASS = 'open';

    constructor(rootEl, defaultTab = Tabs.DEFAULT_OPENED_TAB) {
        this.rootEl = rootEl;
        this.tabItems = Array.from(document.querySelector(Tabs.NAV_TAB).children);
        this.contentItems = Array.from(document.querySelectorAll('div')[1].children);

        this.bindStyles();
        this.bindEvents();
        this.openTab(this.tabItems[defaultTab], defaultTab);
    }

    bindStyles() {
        this.rootEl.classList.add(Tabs.MAIN_TAB_CLASS);
        this.tabItems.forEach((tabItem) => {
            tabItem.classList.add(Tabs.TAB_CLASS);
        });
        this.contentItems.forEach((contentItem) => {
            contentItem.classList.add(Tabs.TAB_CONTENT_CLASS);

        })
    }

    bindEvents() {
        this.rootEl.addEventListener('click', e => this.onRootElClick(e));
    }

    onRootElClick(e) {
        const tab = e.target.closest('.' + Tabs.TAB_CLASS);
        if (tab) {
            const selectedTab = this.getSelectedTab();
            const openedContent = this.getOpenedContent();
            const tabIndex = this.getOpenedTabIndex(tab);
            if (selectedTab && tab !== selectedTab) {
                this.closeTab(selectedTab, openedContent);
            }
            this.openTab(tab, tabIndex);
        }

    }

    getSelectedTab() {
        return this.rootEl.querySelector('.' + Tabs.ACTIVE_TAB_CLASS);
    }

    getOpenedContent() {
        return this.rootEl.querySelector('.' + Tabs.OPENED_CONTENT_CLASS);
    }

    getOpenedTabIndex(tab) {
        return Array.from(document.querySelector(Tabs.NAV_TAB).children).indexOf(tab);
    }

    closeTab(tabItem, contentItem) {
        tabItem.classList.remove(Tabs.ACTIVE_TAB_CLASS);
        contentItem.classList.remove(Tabs.OPENED_CONTENT_CLASS);
    }

    openTab(tabItem, index) {
        tabItem.classList.toggle(Tabs.ACTIVE_TAB_CLASS);
        this.contentItems[index].classList.toggle(Tabs.OPENED_CONTENT_CLASS);
    }
}
