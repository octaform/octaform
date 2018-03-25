import Octaform from '../../src/core';

Octaform.validator.add('email', (value) => {
  return (/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(value) || false;
}, 'Please enter a valid email');
