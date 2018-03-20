import '../scss/styles.scss';
import Octaform from '../../src';
import '../validations/email.validate';
import '../validations/required.validate';
import '../validations/minlength.validate';
import '../validations/teste.validate';
import '../models/driverLicense.model';
import fieldMap from './fieldMap';
import modelMap from './modelMap';

document
  .querySelector('#form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const validate = Octaform.validateAll(fieldMap);
    console.log('modelMap::', modelMap);
    console.log('validate::', validate);
    console.log('isValid::', Octaform.validateAll.isValid);
  });
