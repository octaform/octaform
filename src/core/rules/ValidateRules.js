import ApplyRules from './ApplyRules';
import $ from '../../helpers/selectorHelper';
import { ErrorActions, MessageActions, ValidateActions } from '../actions';

const ValidateRules = (fieldMap = {}) => {
  const errors = [];

  Object.keys(fieldMap)
    .forEach((selector) => {
      const self = fieldMap[selector];
      const element = $(selector);

      MessageActions.setDictionary(selector, self.messages);

      if (!element.length) {
        ErrorActions.set('field', selector);
      }

      const value = (
        self.value ||
        (element.length ? element[element.length - 1].value : '')
      );

      const field = {
        rules: (self.rules || {}),
        messages: MessageActions.getAll(),
        selector,
        element,
        value,
      };

      const valid = ApplyRules(field, ValidateActions.getAll());
      if (valid.messages.length) errors.push(valid);
    });

  ValidateRules.isValid = !errors.length;

  return errors;
};


export default ValidateRules;
