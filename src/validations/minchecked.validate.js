import Octaform from '../';

Octaform.validator.add('minchecked', (value, element, param) => {
  const qtdChecked = element.reduce((acc, option) => {
    if (option.checked) acc++;
    return acc;
  }, 0);
  return (qtdChecked >= param);
}, 'Please select at least {0} options');
