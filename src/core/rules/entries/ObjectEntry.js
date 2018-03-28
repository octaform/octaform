import uniqueId from '../../../helpers/uniqueIdHelper';
import ModelActions from '../../actions/ModelActions';

// extractRulesFromString
const ObjectEntry = (object) => {
  const modelName = uniqueId();
  ModelActions.set({ 
    name: modelName, 
    rules: object.rules, 
    messages: object.messages,
  });
  return ModelActions.get(modelName);
};

export default ObjectEntry;
