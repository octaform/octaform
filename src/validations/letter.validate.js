import Octaform from '../core';

Octaform.validator.add('letter', (value) => {
  return (/^[a-zA-Z]+$/).test(value);
}, 'Please enter only letters');
