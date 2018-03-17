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
      array: [
        '(Array:0)',
        '(Array:1)',
        '(Array:2)',
      ],
      object: { 
        key1: '(Key:0)', 
        key2: {
          key3: [{
            key4: '(key:4)',
          }],
        },
      },
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
