import ApplyRules from './ApplyRules';
import { dom, isString, isObject, isArray } from '../helpers';
import { ErrorActions, MessageActions, ValidateActions } from '../actions';
import { entryType } from '../entries';

const ValidateRules = {
  all: (fieldMap = {}) => {
    const errors = [];

    Object.keys(fieldMap)
      .forEach((selector) => {
        const fieldRulesMapper = fieldMap[selector];
        
        const fieldRulesEntryType = {
          ...(isString(fieldRulesMapper) && entryType.field.string(fieldRulesMapper)),
          ...(isObject(fieldRulesMapper) && entryType.field.object(fieldRulesMapper)),
        };

        if (fieldRulesEntryType) {
          const fieldObjectRules = fieldRulesEntryType || {};
          const element = dom(selector);

          MessageActions.setCustomFieldMsg(selector, fieldObjectRules.messages);

          if (!element.length) {
            ErrorActions.set('field', selector);
          }

          const fieldValue = (
            fieldObjectRules.value || 
            (element.length && element[element.length - 1].value) ||
            ('')
          );

          const fieldRules = (
            (isArray(fieldObjectRules.rules) && entryType.rules.array(fieldObjectRules.rules)) ||
            (isObject(fieldObjectRules.rules) && fieldObjectRules.rules) ||
            {}
          );

          const field = {
            rules: fieldRules,
            messages: MessageActions.getAll(),
            selector,
            element,
            value: fieldValue,
          };

          const valid = ApplyRules(field, ValidateActions.getAll());
          if (valid.messages.length) errors.push(valid);
        } else {
          ErrorActions.set('entry', fieldRulesMapper);
        }
      });

    ValidateRules.isValid = !errors.length;

    return errors;
  },
};

export default ValidateRules;
