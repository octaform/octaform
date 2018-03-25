import Octaform from '../../src/core';

Octaform.validator.add('required', (value) => {
  return (!!value.length || false);
}, 'This field is required');
