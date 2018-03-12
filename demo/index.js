import './scss/styles.scss';
import Octaform from '../src';

const fieldMap = {
  firstName: {
    // value: 'valor do field', // Not required,
    rules: {
      required: true,
      minlength: 3,
    },
    messages: { // Se não estar ele pega do default das configs
      required: 'First Name is required',
      minlength: 'At least you should type 3 letters',
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
};

document
  .querySelector('#form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const validate = Octaform.validateAll(fieldMap);
    console.log(validate);
  });
