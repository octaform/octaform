import Octaform from '../';

Octaform.validator.add('required', (value, element) => {
  if (element.length > 1){
    return element.some(elem => elem.checked);
  }
  return (!!value.length || false);
}, 'This field is required');
