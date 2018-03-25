import Octaform from '../../src/core';

Octaform.validator.add('array', () => {
  return true || false;
}, 'Array index: {0} field {1} is {2} required');

Octaform.validator.add('object', () => {
  return true || false;
}, 'Object keys: {key1} || {key2.key3[0].key4} is required');
