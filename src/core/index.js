import { ValidateRules } from './rules';
import { MethodActions } from './actions';

class Octaform {
  constructor() {
    this.validator = MethodActions.getAll();
    this.validateAll = ValidateRules;
  }
}

export default Octaform;
