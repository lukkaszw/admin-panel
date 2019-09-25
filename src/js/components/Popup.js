import { select } from '../settings.js';

class Popup {
  constructor(id, wrapper) {
    this.id = id;
    this.getElements(wrapper);
    this.addEvents();
  }

  getElements(wrapper) {
    this.dom = {};
    this.dom.wrapper = wrapper;
    this.dom.closeBtn = this.dom.wrapper.querySelector(select.popup.closeBtn);
    this.dom.backdrop = this.dom.wrapper.querySelector(select.popup.backdrop);
  }

  addEvents() {
    this.dom.backdrop.addEventListener('click', () => this.close());
    this.dom.closeBtn.addEventListener('click', () => this.close());
  }

  close() {
    this.dom.wrapper.classList.remove('active');
  }

  open() {
    this.dom.wrapper.classList.add('active');
  }
}

export default Popup;
