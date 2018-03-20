import { isArray, isObject } from '../../helpers';
import ModelActions from '../actions/ModelActions';
import ModelFactory from '../factories/ModelFactory';

const ModelRules = {
  add(model) {
    if (isArray(model)) model.forEach(item => ModelActions.set(item));
    if (isObject(model)) ModelActions.set(model);
  },
  use(mapper){
    if (isObject(mapper)) {      
      return (
        Object
          .entries(mapper)
          .reduce((acc, current) => {
            const model = ModelFactory.toUser(current[0], current[1]);
            return Object.assign(acc, model);
          }, {})
      );
    }

    return {};
  },
};

export default ModelRules;
