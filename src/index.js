import { ValidateRules } from './rules';
import ValidateActions from './actions/ValidateActions';

class Octaform {
  constructor() {
    this.validator = ValidateActions.getAll();
    this.validateAll = ValidateRules.all;
  }
}

module.exports = Octaform;
