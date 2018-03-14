import Octaform from '../../src';

Octaform.validation.add('minlength', (value, element, rule) => {
  return (value.length >= rule);
}, 'This field is required.');
