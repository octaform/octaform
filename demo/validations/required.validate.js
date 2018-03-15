import Octaform from '../../src';

Octaform.validator.add('required', (value) => {
  return (!!value.length || false);
}, 'This field is required.');
