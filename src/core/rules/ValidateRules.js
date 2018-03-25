import ApplyRules from './ApplyRules';
import { $, isType } from '../../helpers';
import { ErrorActions, MessageActions, ValidateActions } from '../actions';

const ValidateRules = (fieldMap = {}) => {
  const errors = [];

  Object.keys(fieldMap)
    .forEach((selector) => {
      const field = fieldMap[selector];
      const self = (isType(field) === 'String' ? { rules: { [field]: true } } : field);
      const element = $(selector);

      MessageActions.setDictionary(selector, self.messages);

      if (!element.length) {
        ErrorActions.set('field', selector);
      }

      const value = (
        self.value ||
        (element.length ? element[element.length - 1].value : '')
      );
      
      const fieldRules = {
        rules: (self.rules || {}),
        messages: MessageActions.getAll(),
        selector,
        element,
        value,
      };

      const valid = ApplyRules(fieldRules, ValidateActions.getAll());
      if (valid.messages.length) errors.push(valid);
    });

  ValidateRules.isValid = !errors.length;

  return errors;
};


export default ValidateRules;
