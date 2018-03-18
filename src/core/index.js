import ValidateRules from './rules/ValidateRules';
import ValidateActions from './actions/ValidateActions';

class Octaform {
  constructor() {
    this.validator = ValidateActions.getAll();
    this.validateAll = ValidateRules;
  }
}

export default Octaform;
