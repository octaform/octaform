import paramsUtils from '../utils/paramsUtils';

// extractRulesFromArray
const ArrayEntry = (field = []) => {
  const rules = field.reduce((acc, current) => {
    const rules = paramsUtils.get.shortStringValidation(current);
    return { ...acc, ...rules };
  }, {});

  return rules;
};

export default ArrayEntry;
