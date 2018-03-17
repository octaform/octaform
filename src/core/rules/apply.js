import { Replace } from '../actions';

export default (objField, validations) => {
  const errors = {
    field: objField.selector,
    messages: [],
  };
  
  Object
    .entries(objField.rules || {})
    .forEach(([ruleKey, params]) => {
      const fnValidate = validations[ruleKey];
      if (fnValidate) {
        const result = fnValidate(
          objField.value,
          objField.element,
          params,
        );

        if (!result) {
          const message = Replace.message.validation(
            objField.messages[ruleKey],
            params,
          );
          
          errors.messages.push(message);
        }
      } else {
        throw new ReferenceError(`${ruleKey} is not defined`);
      }
    });

  return errors;
};
