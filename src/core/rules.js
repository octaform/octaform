import validations from '../validations';

const Rules = {
  apply(objField) {
    const errors = {
      field: objField.selector,
      messages: [],
    };

    Object
      .entries(objField.rules || {})
      .forEach(([ruleKey, ruleValue]) => {
        const fnValidate = validations[ruleKey];
        if (fnValidate) {
          const result = fnValidate(objField.value, objField.element, ruleValue);

          if (!result) {
            const message = objField.messages[ruleKey];
            errors.messages.push(message);
          }
        } else {
          throw new ReferenceError(`${ruleKey} is not defined`);
        }
      });

    return errors;
  },
};

export default Rules;
