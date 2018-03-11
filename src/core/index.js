// import Config from './config';
import Rules from './rules';

class Octaform {
  constructor() {
    this.validateAll = this.validateAll.bind(this);
    this.messages = [];
  }

  validateAll(fieldMap = {}) {
    this.messages = [];

    Object.keys(fieldMap)
      .forEach((selector) => {
        const self = fieldMap[selector];

        const element = (
          document.getElementsByName(selector) ||
          document.getElementsByClassName(selector) ||
          document.getElementById(selector)
        ) || '';

        const value = (
          self.value ||
          (element.length ? element[element.length - 1].value : '')
        );

        const field = {
          rules: (self.rules || {}),
          messages: (self.messages || {}),
          selector,
          element,
          value,
        };
        
        const validation = Rules(field);
        if (validation.messages.length) this.messages.push(validation);
      });

    return (
      this.messages
    );
  }
}

export default (window.Octaform) = (
  new Octaform()
);
