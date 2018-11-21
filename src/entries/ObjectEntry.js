import rule from '../models/rule';

// extractRulesFromString
const ObjectEntry = (object) => {
  return rule.get(object);
};

export default ObjectEntry;
