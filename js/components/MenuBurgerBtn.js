class MenuBurgerBtn {
  constructor(element) {
    this.getElements(element);
  }

  getElements(element) {
    this.element = element;
    this.element.addEventListener('click', () => {
      this.element.classList.toggle('active');
      const isActive = this.element.classList.contains('active');
      this.initAction(isActive);
    });
  }

  initAction(isActive) {
    const event = new CustomEvent('burgerClicked', {
      bubbles: true,
      detail: {
        isBtnActive: isActive,
      }
    });

    this.element.dispatchEvent(event);
  }
}

export default MenuBurgerBtn;