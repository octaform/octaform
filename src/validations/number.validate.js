import Octaform from '../';

Octaform.validator.add('number', (value) => {
  return /^\d+$/g.test(value);
}, 'Please enter a valid number');
