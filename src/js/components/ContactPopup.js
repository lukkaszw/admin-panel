import { select } from '../settings.js';
import Popup from './Popup.js';

class ContactPopup extends Popup {
  constructor(id, wrapper) {
    super(id, wrapper);
    this.getAdditionalElements();
  } 

  getAdditionalElements() {
    this.dom.form = this.dom.wrapper.querySelector(select.contactPopup.form);
    this.dom.input = this.dom.wrapper.querySelector(select.contactPopup.input);
    this.dom.panel = this.dom.wrapper.querySelector(select.contactPopup.panel);
  }
}

export default ContactPopup;