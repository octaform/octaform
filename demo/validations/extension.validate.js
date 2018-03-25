import Octaform from '../../src/core';

Octaform.validator.add('extension', (value, element, params) => {
  const file = Array.from(element[0].files);
  return file.some((item) => {
    const fileType = (item.type).split('/')[1];
    return params.includes(fileType);
  });
}, 'Please choose a file with a valid extension: ({0}, {1})');
