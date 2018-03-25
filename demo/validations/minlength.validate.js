import Octaform from '../../src/core';

Octaform.validator.add('minlength', (value, element, param) => {
  return (value.length >= param);
}, 'Please enter at least {0} characters');
