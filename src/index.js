import { ValidateRules, ModelRules } from './core/rules';
import ValidateActions from './core/actions/ValidateActions';

class Octaform {
  constructor() {
    this.validator = ValidateActions.getAll();
    this.validateAll = ValidateRules;
    this.model = ModelRules;
  }
}

export default new Octaform();
