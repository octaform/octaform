import paramsUtils from '../utils/paramsUtils';
import rule from '../models/rule';

// extractRulesFromString
const StringEntry = (string) => {
  const rules = paramsUtils.get.shortStringValidation(string);
  return rule.get({ 
    messages: {},
    rules,
  });
};

export default StringEntry;
