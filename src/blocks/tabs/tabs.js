class Tabs {

  constructor(target, options = {}) {
    this._target = target;
    this.setOptions(options);

    this.init();
  }


  init() {
    this.getTabs().forEach((item) => {
      item.addEventListener(`click`, () => {
        this.toggleTab(item);
      })
    })
  }

  setOptions(x) {
    return this.DEFAULT_OPTION = {
      DATA_TAB: (x.dataTab && x.dataTab !== ``) ? x.dataTab : `data-tab`,
      DATA_CONTENT: (x.dataContent && x.dataContent !== ``) ? x.dataContent : `data-content`,
      TAB_ACTIVE_CLASS: (x.tabsItemActive && x.tabsItemActive !== ``) ? x.tabsItemActive : `tabs__item--active`,
      CONTENT_ACTIVE_CLASS: (x.tabsContentActive && x.tabsContentActive !== ``) ? x.tabsContentActive : `tabs__content--active`
    }
  }

  getTabs() {
    return this._target.querySelectorAll(`[${this.DEFAULT_OPTION.DATA_TAB}]`);
  }

  toggleTab(item) {
    const id = item.getAttribute(this.DEFAULT_OPTION.DATA_TAB);
    const content = this._target.querySelector(`[${this.DEFAULT_OPTION.DATA_CONTENT}="${id}"]`);
    const activeTab = this._target.querySelector(`.${this.DEFAULT_OPTION.TAB_ACTIVE_CLASS}[${this.DEFAULT_OPTION.DATA_TAB}]`);
    const activeContent = this._target.querySelector(`.${this.DEFAULT_OPTION.CONTENT_ACTIVE_CLASS}[${this.DEFAULT_OPTION.DATA_CONTENT}]`);

    this.toggleClass(activeTab, item, this.DEFAULT_OPTION.TAB_ACTIVE_CLASS);
    this.toggleClass(activeContent, content, this.DEFAULT_OPTION.CONTENT_ACTIVE_CLASS);
  }

  toggleClass(activeTarget, disableTarget, activeClass) {
    activeTarget.classList.remove(activeClass);
    disableTarget.classList.add(activeClass);
  }
}

export default Tabs;


