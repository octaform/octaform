import { ValidateRules, ModelRules } from './rules';
import ValidateActions from './actions/ValidateActions';

class Octaform {
  constructor() {
    this.validator = ValidateActions.getAll();
    this.validateAll = ValidateRules.all;
    this.model = ModelRules;
  }
}

module.exports = Octaform;
