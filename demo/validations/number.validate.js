import Octaform from '../../src/core';

Octaform.validator.add('number', (value) => {
  return /^\d+$/g.test(value);
}, 'Please enter a valid number');
