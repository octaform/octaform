import '../scss/styles.scss';
import Octaform from '../../src/core';
import '../validations/email.validate';
import '../validations/required.validate';
import '../validations/minlength.validate';
import '../validations/maxlength.validate';
import '../validations/valueNotEquals.validate';
import '../validations/extension.validate';
import '../validations/maxsize.validate';
import '../validations/number.validate';
import '../validations/letter.validate';
import '../validations/teste.validate';
import '../models/driverLicense.model';
import fieldMap from './fieldMap';
import modelMap from './modelMap';

document.addEventListener('DOMContentLoaded', () => {
  const listErrors = document.getElementById('errors');

  function getTplError(field, msg) {
    return (`
      <li> 
        <strong>Error <i class='field'>${field}</i></strong>
        <span>
          ${msg}
        </span>
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

        validate.forEach((error) => {
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
