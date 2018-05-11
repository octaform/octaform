import { ReplaceActions, ErrorActions } from '../actions';
import dom from '../helpers/domHelper';

const Rules = {
  apply: (field = {}, validations = {}) => {
    const errors = {
      field: (field.selector || ''),
      messages: [],
    };

    if (errors.field){
      Object
        .entries(field.rules || {})
        .forEach(([key, params]) => {
          const validate = validations[key];
          if (validate) {
            const isValid = validate(
              field.value,
              field.element,
              params,
              dom,
            );

            if (!isValid) {
              const userMessage = field.messages.fields[field.selector] || {};
              const message = (userMessage[key] || field.messages.validator[key]);
              const result = ReplaceActions.message.validation(
                message,
                params,
              );

              errors.messages.push(result);
            }
          } else {
            ErrorActions.set('undefined', key);
          }
        });
    }

    return errors;
  },
};

export default Rules;
