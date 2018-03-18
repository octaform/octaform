import { ApplyRules } from '../rules/ApplyRules';
import { $ } from '../../helpers';
import { ErrorActions, MessageActions, MethodActions } from '../actions';

export const ValidateRules = (fieldMap = {}) => {
  const errors = [];

  Object.keys(fieldMap)
    .forEach((selector) => {
      const self = fieldMap[selector];
      const element = $(selector);

      if (!element.length) {
        ErrorActions.reference('field', selector);
      }

      if (Object.keys(self.messages || {}).length) {
        MessageActions.setDictionary(selector, self.messages);
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

      const valid = ApplyRules(field, MethodActions.getAll());
      if (valid.messages.length) errors.push(valid);
    });

  return errors;
};
