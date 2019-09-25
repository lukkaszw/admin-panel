class TopMenu {
  constructor(wrapper) {
    this.getElements(wrapper);
  }

  getElements(wrapper) {
    this.dom = {};
    this.dom.wrapper = wrapper;
  }
}

export default TopMenu;