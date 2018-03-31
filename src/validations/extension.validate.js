import Octaform from '../';

Octaform.validator.add('extension', (value, element, params) => {
  const file = Array.from(element[0].files);
  return file.some((item) => {
    const fileType = (item.type).split('/')[1];
    if (fileType === 'jpeg' && params.includes('jpg') && !params.includes('jpeg')) params.push('jpeg');
    return params.includes(fileType);
  });
}, 'Please choose a file with a valid extension: ({0}, {1})');
