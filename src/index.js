import Validate from './rules/Validate';

class Octaform {
  constructor() {
    this.validator = Validate.getAll();
    this.validateAll = Validate.apply;
  }
}

module.exports = Octaform;
