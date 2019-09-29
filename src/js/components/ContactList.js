import { select } from '../settings.js';
import ContactPopup from './ContactPopup.js';

class ContactList {
  constructor(wrapper) {
    this.getElements(wrapper);
  }

  getElements(wrapper) {
    this.dom = {};
    this.dom.wrapper = wrapper;
    this.dom.btns = this.dom.wrapper.querySelectorAll(select.contactList.btns);
    this.dom.contactPopupElements = document.querySelectorAll(select.wrapperOf.popup.contact);
    this.contactPopups = [...this.dom.contactPopupElements].map(element => {
      const id = element.getAttribute('id');
      return new ContactPopup(id, element);
    });

    this.dom.btns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactId =  btn.getAttribute('href').replace('#','');
      this.activateContact(contactId);
    }));
  }

  activateContact(contactId) {
    this.contactPopups.forEach(popup => {
      popup.id === contactId && popup.open();
      return;
    });
  }
}

export default ContactList;