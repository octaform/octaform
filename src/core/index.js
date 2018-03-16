import Rules from './rules';
import { $ } from '../helpers';

class Octaform {
  constructor() {
    this.validator = {
      add: this.addMethod,
    };

    this.validateAll = this.validateAll.bind(this);
  }

  addMethod(name, fn, msg) {
    Rules.messages.set(name, msg);
    this[name] = fn;
  }

  validateAll(fieldMap = {}) {
    const errors = [];

    Object.keys(fieldMap)
      .forEach((selector) => {
        const self = fieldMap[selector];
        const element = $(selector);

        if (!element.length) {
          throw new ReferenceError(`the ${selector} field wasn't found`);
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
