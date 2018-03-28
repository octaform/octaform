import uniqueId from '../../../helpers/uniqueIdHelper';
import ModelActions from '../../actions/ModelActions';
import paramsUtil from '../../utils/paramsUtils';

// extractRulesFromString
const StringEntry = (string) => {
  const modelName = uniqueId();
  const rules = paramsUtil.get.list(string);

  ModelActions.set({ 
    name: modelName, 
    rules, 
  });
  
  return ModelActions.get(modelName);
};

export default StringEntry;
