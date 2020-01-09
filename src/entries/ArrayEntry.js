import utilParams from '@utils/util-params';

// extractRulesFromArray
const arrayEntry = (field = [], validations = {}) => {
  return field.reduce((acc, current) => {
    const rules = utilParams.shortStringValidation(current, validations);
    // validations
    return { ...acc, ...rules };
  }, {});
};

export default arrayEntry;
