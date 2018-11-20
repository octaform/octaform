import Rules from './Rules';
import { dom, isString, isObject, isArray } from '../helpers';
import { ErrorActions, MessageActions, ValidateActions } from '../actions';
import { entryType } from '../entries';

const Validate = {
  getAll: ValidateActions.getAll,
  apply: (fieldMap = {}) => {
    const errors = [];

    Object.keys(fieldMap)
      .forEach((selector) => {
        const fieldRulesMapper = fieldMap[selector];
        
        const fieldRulesEntryType = {
          ...(isString(fieldRulesMapper) && entryType.field.string(fieldRulesMapper)),
          ...(isObject(fieldRulesMapper) && entryType.field.object(fieldRulesMapper)),
        };
        
        if (!!Object.keys(fieldRulesEntryType).length) {
          const element = dom(selector);
          MessageActions.setCustomFieldMsg(selector, fieldRulesEntryType.messages);

          if (!element.length) {
            ErrorActions.set('field', selector);
          }

          const fieldValue = (
            fieldRulesEntryType.value || 
            (element.length && element[element.length - 1].value) ||
            ('')
          );

          const fieldRules = (
            (isArray(fieldRulesEntryType.rules) && entryType.rules.array(fieldRulesEntryType.rules)) ||
            (isObject(fieldRulesEntryType.rules) && fieldRulesEntryType.rules) ||
            {}
          );

          const field = {
            rules: fieldRules,
            messages: MessageActions.getAll(),
            selector,
            element,
            value: fieldValue,
          };
          
          const valid = Rules.apply(field, ValidateActions.getAll());
          if (valid.messages.length) errors.push(valid);
        } else {
          ErrorActions.set('entry', fieldRulesMapper);
        }
      });

    Validate.isValid = !errors.length;

    return errors;
  },
};

export default Validate;
