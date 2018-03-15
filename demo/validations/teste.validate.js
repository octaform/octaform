import Octaform from '../../src';

Octaform.validator.add('array', () => {
  return false;
}, 'Array index: {0} field {1} is {2} required.');

Octaform.validator.add('object', () => {
  return false;
}, 'Object keys: {key1} || {key2} is required.');
