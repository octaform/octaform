import Octaform from '../../src';

Octaform.validation.add('required', (value) => {
  return (!!value.length || false);
}, 'This field is required.');
