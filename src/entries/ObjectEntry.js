import RuleModel from '../models/RuleModel';

// extractRulesFromString
const ObjectEntry = (object) => {
  return RuleModel.get(object);
};

export default ObjectEntry;
