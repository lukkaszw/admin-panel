import { select } from '../settings.js';
import TopMenu from './TopMenu.js';

class MainMenu {
  constructor(element, sections) {
    this.getElements(element, sections);
    this.initTopMenu();
  }

  getElements(element, sections) {
    this.dom = {};
    this.dom.wrapper = element;
    this.dom.btns = this.dom.wrapper.querySelectorAll(select.mainMenu.btns);
    this.sections = sections;

    this.dom.btns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = btn.getAttribute('href').replace('#', '');
      btn.classList.toggle('active');
      this.toggleSection(sectionId);
    }));
  }

  initTopMenu() {
    this.topMenuElement = document.querySelector(select.wrapperOf.topMenu);
    this.topMenu = new TopMenu(this.topMenuElement);
    this.topMenuElement.addEventListener('toggleSection', (e) => {
      const sectionId = e.detail.sectionId;
      this.toggleBtn(sectionId);
      this.toggleSection(sectionId);
    });
  }

  toggleBtn(sectionId) {
    const btn = [...this.dom.btns].find(btn => (btn.getAttribute('href').replace('#', '') === sectionId));
    if(btn) {
      btn.classList.toggle('active');
    }
  }

  toggleSection(sectionId) {
    const section = [...this.sections].find(section => section.getAttribute('id') === sectionId);
    if(section) {
      section.classList.toggle('active');
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  }
}

export default MainMenu;