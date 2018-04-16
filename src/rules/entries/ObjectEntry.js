import uniqueId from '../../helpers/uniqueIdHelper';
import ModelActions from '../../actions/ModelActions';

// extractRulesFromString
const ObjectEntry = (object) => {
  const name = uniqueId();
  ModelActions.set({ name, ...object });
  return ModelActions.get(name);
};

export default ObjectEntry;
