import { select } from '../settings.js';

class MainMenu {
  constructor(element, sections) {
    this.getElements(element, sections);
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

  toggleSection(sectionId) {
    this.sections.forEach(section => {
      const id = section.getAttribute('id');
      if(id === sectionId) {
        section.classList.toggle('active');
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
        return;
      }
    });
  }
}

export default MainMenu;