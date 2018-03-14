import Octaform from '../../src';

Octaform.validation.add('email', (value) => {
  return (/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i).test(value) || false;
}, 'Please enter a valid email');
