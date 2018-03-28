import uniqueId from '../../../helpers/uniqueIdHelper';
import ModelActions from '../../actions/ModelActions';
import paramsUtil from '../../utils/paramsUtils';

// extractRulesFromArray
const ArrayEntry = (field) => {
  const rulesObj = field.reduce((acc, current) => {
    const rules = paramsUtil.get.list(current);
    return { ...acc, ...rules };
  }, {});

  const modelName = uniqueId();
  ModelActions.set({ name: modelName, rules: rulesObj });
  return ModelActions.get(modelName);
};

export default ArrayEntry;
