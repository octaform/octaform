import Octaform from '../../src/core';

Octaform.validator.add('maxlength', (value, element, param) => {
  return (value.length <= param);
}, 'Please enter no more than {0} characters.');
