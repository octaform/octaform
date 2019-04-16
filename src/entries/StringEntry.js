import { shortStringValidation } from '../utils/util-params';
import rule from '../models/rule';

// extractRulesFromString
const stringEntry = (string, validations) => {
  const rules = shortStringValidation(string, validations);
  return rule.get({
    messages: {},
    rules,
  });
};

export default stringEntry;
