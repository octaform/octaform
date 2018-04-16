import uniqueId from '../../helpers/uniqueIdHelper';
import ModelActions from '../../actions/ModelActions';
import paramsUtils from '../../utils/paramsUtils';

// extractRulesFromString
const StringEntry = (string) => {
  const modelName = uniqueId();
  const rules = paramsUtils.get.shortStringValidation(string);
  ModelActions.set({ name: modelName, rules });
  return ModelActions.get(modelName);
};

export default StringEntry;
