import './scss/styles.scss';
import Octaform from '../src';
import './validations/email.validate';
import './validations/required.validate';
import './validations/minlength.validate';
import './validations/teste.validate';

const fieldMap = {
  firstName: {
    // value: 'valor do field', // Not required,
    rules: {
      required: true,
      minlength: 3,
      array: ['(Valor)', '(Key)', '(Teste)'],
      object: { key1: '[Valor 1]', key2: '[Valor 2]' },
    },
    messages: { // Se não estar ele pega do default das configs
      required: 'First Name is required',
    },
  },
  lastName: {
    // value: 'valor do field', // Not required,
    rules: {
      required: true,
    },
    messages: { // Se não estar ele pega do default das configs
      required: 'Last Name is required',
    },
  },
  email: {
    rules: {
      required: true,
      email: true,
    },
  },
};

document
  .querySelector('#form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const validate = Octaform.validateAll(fieldMap);
    console.log(validate);
  });
