import '../scss/styles.scss';
import Octaform from '../../src';
import '../validations/email.validate';
import '../validations/required.validate';
import '../validations/minlength.validate';
import '../validations/teste.validate';
import fieldMap from './fieldMap';

document
  .querySelector('#form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const validate = Octaform.validateAll(fieldMap);
    console.log(validate);
    console.log('isValid::', Octaform.validateAll.isValid);
  });
