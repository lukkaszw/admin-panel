import { select } from '../settings.js';
import { validatorFunctionFor } from '../validators.js';

class PersonalData {
  constructor(wrapper) {
    this.getElements(wrapper);
  }

  getElements(wrapper) {
    this.dom = {};
    this.dom.wrapper = wrapper;
    this.dom.form = this.dom.wrapper.querySelector(select.personalData.form);
    this.dom.inputs = Object.values(select.personalData.inputFor).map(queryArgument => {
      const propertyName = queryArgument.replace('#', '');
      const objectDom = this.dom.wrapper.querySelector(queryArgument);
      return {
        [propertyName]: objectDom
      };
    });

    this.dom.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.checkValidation();
    });

    
  }

  checkValidation() {
    let formIsValid = true;
    const data = {};
    this.dom.inputs.forEach(inputObj =>{
      Object.entries(inputObj).forEach((array) => {

        const inputName = array[0];
        const inputDom = array[1];

        data[inputName] = inputDom.value;

        if(!validatorFunctionFor[inputName](inputDom.value)) {
          inputDom.classList.add('invalid');
          formIsValid = false;
        } else {
          inputDom.classList.remove('invalid');
        }
      });
    });

    if(formIsValid) {
      console.log(data);
      /// post danych do bazy metodą fetch
    }
  }


}

export default PersonalData;