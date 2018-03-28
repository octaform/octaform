import '../scss/styles.scss';
import '../models/driverLicense.model';
import Octaform from '../../src/core';
import fieldMap from './fieldMap';
import modelMap from './modelMap';

document.addEventListener('DOMContentLoaded', () => {
  const listErrors = document.getElementById('errors');

  function getTplError(field, msg) {
    return (`
      <li> 
        <strong>Error <i class='field'>${field}</i></strong>
        <span>${msg}</span>
      </li>
    `);
  }

  document
    .querySelector('#form')
    .addEventListener('submit', (e) => {
      e.preventDefault();
      const validate = Octaform.validateAll(fieldMap);
      const errors = document.querySelector('.errors');

      if (validate.length){
        errors.innerHTML = '';

        document
          .querySelectorAll('.invalid')
          .forEach((element) => {
            element.classList.remove('invalid');  
          });

        validate.forEach((error) => {
          const field = document.getElementsByName(error.field);
          field[0].classList.add('invalid');

          error.messages.forEach((msg) => {
            errors.innerHTML = errors.innerHTML.concat(getTplError(error.field, msg));
          });
        });

        listErrors.classList.remove('hidden');
      } else {
        listErrors.classList.add('hidden');
      }

      console.log('modelMap::', modelMap);
      console.log('validate::', validate);
      console.log('isValid::', Octaform.validateAll.isValid);
    });
});
