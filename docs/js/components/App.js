import { select, settings } from '../settings.js';
import MainMenu from './MainMenu.js';
import SideBar from './SideBar.js';
import ContactList from './ContactList.js';
import PersonalData from './PersonalData.js';
import ChartElement from './ChartElement.js';

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

  initContactList() {
    const contactElement = document.querySelector(select.wrapperOf.contactList);
    this.contactList = new ContactList(contactElement);
  }

  initPersonalData() {
    const personalDataElement = document.querySelector(select.wrapperOf.personalData);
    this.personalData = new PersonalData(personalDataElement);
  }

  initCharts() {
    const generalChartElement = document.querySelector(select.chartIn.generalStatistic);
    this.generalChart = new ChartElement(generalChartElement);
  }

  init() {
    this.initSideBar();
    this.initSections();
    this.initMenu();
    this.initContactList();
    this.initPersonalData();
    this.initCharts();
  }

}

export default App;