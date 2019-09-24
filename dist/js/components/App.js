import { select, settings } from '../settings.js';
import MainMenu from './MainMenu.js';
import SideBar from './SideBar.js';

class App {


  initSideBar() {
    const sideBarElement = document.querySelector(select.wrapperOf.sideBar);
    this.sideBar = new SideBar(sideBarElement);
  }

  initMenu() {
    const mainMenuElement = document.querySelector(select.wrapperOf.mainMenu);
    this.mainMenu = new MainMenu(mainMenuElement, this.sections);
  }

  initSections() {
    const mainContainer = document.querySelector(select.wrapperOf.mainContainer);
    this.sections = mainContainer.querySelectorAll(select.mainContainer.sections);
    this.sections.forEach(section => {
      if(section.getAttribute('id') === settings.startSection) {
        if(!section.classList.contains('active')) section.classList.add('active');
      }
      return;
    });
  }

  init() {
    this.initSideBar();
    this.initSections();
    this.initMenu();
  }

}

export default App;