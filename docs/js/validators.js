import { select } from './settings.js';

/* eslint-disable no-useless-escape */
export const validatorFunctionFor = {
  name: (value) => /^[A-Z].{1,30}$/.test(value),
  surname: (value) => /^[A-Z].{1,30}$/.test(value),
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  phone: (value) => /^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/.test(value),
  skype: () => true,
  icq: () => true,
  msn: () => true,
  wallet: () => true,
  password: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,20}$/.test(value),
  're-password': (value) => {
    const firstPassword = document.querySelector(select.personalData.inputFor.password).value;
    return value === firstPassword;
  },
};