import Octaform from '../core';

Octaform.validator.add('maxsize', (value, element, param) => {
  const file = Array.from(element[0].files);  
  return file.some(item => (item.size <= param));
}, 'File size must not exceed {0} bytes');
