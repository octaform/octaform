import paramsUtils from '../utils/paramsUtils';
import RuleModel from '../models/RuleModel';

// extractRulesFromString
const StringEntry = (string) => {
  const rules = paramsUtils.get.shortStringValidation(string);
  return RuleModel.get({ 
    messages: {},
    rules,
  });
};

export default StringEntry;
