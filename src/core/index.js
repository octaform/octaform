import Rules from './rules';
import validation from './validation';
import { $ } from '../helpers';

class Octaform {
  constructor() {
    this.validation = validation;
    this.validateAll = this.validateAll.bind(this);
    this.messages = {};
  }

  validateAll(fieldMap = {}) {
    const errors = [];

    Object.keys(fieldMap)
      .forEach((selector) => {
        const self = fieldMap[selector];
        const element = $(selector);

        const messages = Object.assign(
          this.messages,
          (self.messages || {}),
        );

        const value = (
          self.value ||
          (element.length ? element[element.length - 1].value : '')
        );

        const field = {
          rules: (self.rules || {}),
          messages: (messages || {}),
          selector,
          element,
          value,
        };
        
        const valid = Rules.apply(field, this.validation);
        if (valid.messages.length) errors.push(valid);
      });

    return errors;
  }
}

export default Octaform;
