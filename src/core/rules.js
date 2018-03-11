import validations from '../validations';

const Rules = (objField) => {
  const errors = {
    field: objField.selector,
    messages: [],
  };

  const objFieldMap = Object.entries(objField.rules || {});

  objFieldMap.forEach((rule) => {
    const fn = validations[rule[0]];
    if (fn) {
      const result = fn(objField.value, rule[1], objField.element);
      
      if (!result) {
        errors.messages.push(objField.messages[rule[0]]);
      }
    } else {
      throw new ReferenceError(`${rule[0]} is not defined`);
    }
  }); 
  
  return errors;
};

export default Rules;
