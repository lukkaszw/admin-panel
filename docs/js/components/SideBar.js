import { select } from '../settings.js';
import MenuBurgerBtn from './MenuBurgerBtn.js';

class SideBar {
  constructor(element) {
    this.getElements(element);
  }

  getElements(element) {
    this.dom = {};
    this.dom.wrapper = element;
    this.dom.sideBarElement = this.dom.wrapper.querySelector(select.sideBar.element);
    this.dom.burgerBtnElement = this.dom.wrapper.querySelector(select.sideBar.burgerBtn);
    this.burger = new MenuBurgerBtn(this.dom.burgerBtnElement);

    this.dom.wrapper.addEventListener('burgerClicked', () => {
      // const isActive = e.detail.isBtnActive;
      this.toggleSideBarActivity();
    });
  }

  toggleSideBarActivity() {
    // isActive ? this.dom.sideBarElement.classList.add('active') : this.dom.sideBarElement.classList.remove('active');
    this.dom.sideBarElement.classList.toggle('active');
  }


}

export default SideBar;