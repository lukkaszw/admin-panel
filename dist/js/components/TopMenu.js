import { select } from '../settings.js';
import Popup from './Popup.js';

class TopMenu {
  constructor(wrapper) {
    this.getElements(wrapper);
  }

  getElements(wrapper) {
    this.dom = {};
    this.dom.wrapper = wrapper;
    this.dom.btns = this.dom.wrapper.querySelectorAll(select.topMenu.btns);
    this.dom.elements = document.querySelectorAll(select.topMenu.elements);
    const closePopupElement = document.querySelector(select.wrapperOf.popup.quick);
    this.closePopup = new Popup(null, closePopupElement);
    this.dom.closeRef = this.dom.wrapper.querySelector(select.topMenu.closeRef);

    this.dom.closeRef.addEventListener('click', (e) => {
      e.preventDefault();
      this.closePopup.open();
    });

    this.dom.btns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      const elementId = btn.getAttribute('href').replace('#', '');
      this.toggleElement(elementId);
    }));
  }

  toggleElement(elementId) {
    const element = [...this.dom.elements].find(element => element.getAttribute('id') === elementId);
    if(element.classList.contains('section')) {
      const event = new CustomEvent('toggleSection', {
        bubbles: true,
        detail: {
          sectionId: elementId,
        }
      });
  
      this.dom.wrapper.dispatchEvent(event);
      return;
    }

    element.classList.toggle('active');
  }
}

export default TopMenu;