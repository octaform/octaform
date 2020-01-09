import Rules from './Rules';
import dom from '@utils/util-dom';
import utilTypes from '@utils/util-types';
import { ErrorActions, MessageActions, ValidateActions } from '@actions';
import { stringEntry, objectEntry, arrayEntry } from '@entries';

const Validate = {
  getAll: ValidateActions.getAll,
  apply: (fieldMap = {}) => {
    const errors = [];
    const validations = Validate.getAll();

    Object.keys(fieldMap).forEach(selector => {
      const fieldRulesMapper = fieldMap[selector];

      const fieldRulesEntryType = {
        ...(utilTypes.isString(fieldRulesMapper) &&
          stringEntry(fieldRulesMapper, validations)),
        ...(utilTypes.isObject(fieldRulesMapper) &&
          objectEntry(fieldRulesMapper)),
      };

      if (!!Object.keys(fieldRulesEntryType).length) {
        const element = dom.$(selector);
        MessageActions.setCustomFieldMsg(
          selector,
          fieldRulesEntryType.messages
        );

        if (!element.length) {
          ErrorActions.set('field', selector);
        }

        const fieldValue =
          fieldRulesEntryType.value ||
          (element.length && element[0].value) ||
          '';

        const fieldRules =
          (utilTypes.isArray(fieldRulesEntryType.rules) &&
            arrayEntry(fieldRulesEntryType.rules, validations)) ||
          (utilTypes.isObject(fieldRulesEntryType.rules) &&
            fieldRulesEntryType.rules) ||
          {};

        const field = {
          rules: fieldRules,
          messages: MessageActions.getAll(),
          selector,
          element,
          value: fieldValue,
        };

        const valid = Rules.apply(field, validations);
        if (valid.messages.length) errors.push(valid);
      } else if (!!fieldRulesMapper) {
        ErrorActions.set('entry', selector);
      }
    });

    Validate.isValid = !errors.length;

    return errors;
  },
};

export default Validate;
