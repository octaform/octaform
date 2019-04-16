import { shortStringValidation } from '../utils/util-params';

// extractRulesFromArray
const arrayEntry = (field = [], validations = {}) => {
  return field.reduce((acc, current) => {
    const rules = shortStringValidation(current, validations);
    // validations
    return { ...acc, ...rules };
  }, {});
};

export default arrayEntry;
