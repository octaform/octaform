import Rules from './rules';
import { $ } from '../helpers';
import { Errors } from './actions';

class Octaform {
  constructor() {
    this.validator = Rules.methods.getAll();
    this.validateAll = this.validateAll.bind(this);
  }

  validateAll(fieldMap = {}) {
    const errors = [];

    Object.keys(fieldMap)
      .forEach((selector) => {
        const self = fieldMap[selector];
        const element = $(selector);

        if (!element.length) {
          Errors.reference('field', selector);
        }

        Rules
          .messages
          .setDictionary(self.messages);

        const value = (
          self.value ||
          (element.length ? element[element.length - 1].value : '')
        );

        const field = {
          rules: (self.rules || {}),
          messages: Rules.messages.getAll(),
          selector,
          element,
          value,
        };

        const valid = Rules.apply(field, this.validator);
        if (valid.messages.length) errors.push(valid);
      });

    return errors;
  }
}

export default Octaform;
