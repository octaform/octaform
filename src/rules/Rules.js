import { ReplaceActions, ErrorActions } from '@actions';
import utilTypes from '@utils/util-types';

const Rules = {
  apply: (field = {}, validations = {}) => {
    const fieldMap = {
      field: field.selector || '',
      messages: [],
      rules: {},
    };

    if (fieldMap.field) {
      Object.entries(field.rules || {}).forEach(([key, params]) => {
        const validate = validations[key];

        if (validate) {
          if (
            validate.paramType &&
            utilTypes.is(params) !== validate.paramType.name
          ) {
            ErrorActions.set('paramType', {
              validation: key,
              paramType: validate.paramType.name,
              fieldName: fieldMap.field,
            });
          }

          const isValid = validate(field.value, field.element, params);

          if (!isValid && (field.rules.required || field.value)) {
            const userMessage = field.messages.fields[field.selector] || {};
            const message = userMessage[key] || field.messages.validator[key];
            const result = ReplaceActions.message.validation(message, params);

            fieldMap.messages.push(result);
            fieldMap.rules[key] = result;
          }
        } else {
          ErrorActions.set('undefined', key);
        }
      });
    }

    return fieldMap;
  },
};

export default Rules;
