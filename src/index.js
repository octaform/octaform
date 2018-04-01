import { ValidateRules, ModelRules } from './rules';
import ValidateActions from './actions/ValidateActions';

module.exports = {
  validator: ValidateActions.getAll(),
  validateAll: ValidateRules.all,
  model: ModelRules,
};
