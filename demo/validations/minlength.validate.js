import Octaform from '../../src';

Octaform.validator.add('minlength', (value, element, param) => {
  return (value.length >= param);
}, 'Please enter at least {0} characters.');
