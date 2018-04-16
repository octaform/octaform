import ApplyRules from './ApplyRules';
import { dom, isString, isObject } from '../helpers';
import { ErrorActions, MessageActions, ValidateActions, ModelActions } from '../actions';
import { StringEntry, ObjectEntry } from './entries';

const ValidateRules = {
  all: (fieldMap = {}) => {
    const errors = [];
    
    ModelActions.deleteAll();

    Object.keys(fieldMap)
      .forEach((selector) => {
        const field = fieldMap[selector];
        
        const entryRuleType = {
          [isString(field)]: (isString(field) && StringEntry(field)),
          [isObject(field)]: (isObject(field) && ObjectEntry(field)),
        };
        
        if (entryRuleType.true) {
          const self = entryRuleType.true || {};
          const element = dom(selector);
          
          MessageActions.setCustomFieldMsg(selector, self.messages);

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
        } else {
          ErrorActions.set('entry', field);
        }
      });

    ValidateRules.isValid = !errors.length;

    return errors;
  },
};

export default ValidateRules;
