import state from './state';
import types from './utils/types';

const extend = (validations) => {
  if(Array.isArray(validations)) {
    validations.forEach((validation) => {
      const { name, validator, message } = validation;
      const hasAllParameters = !!name && !!validator && !!message;
      const isValidParameters = types.isString(name) && types.isFunction(validator) && types.isString(message);

      if(hasAllParameters && isValidParameters) {
        state.validator[name] = validator;
        state.messages[name] = message;
      } else {
        console.error('Validation method has invalid parameters');
      }
    });
  } else {
    console.error('Extend method expect an array of validations')
  }
}

export default extend;
