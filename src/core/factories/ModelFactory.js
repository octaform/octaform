import { isString, isObject } from '../../helpers';
import ModelActions from '../actions/ModelActions';

export default {
  toUser(field, data){
    const model = {
      [isString(data)]: ModelActions.get(data),
      [isObject(data)]: ModelActions.get(data.model),
    };

    return {
      [field]: Object.assign(model.true, {
        ...isObject(data) && { value: data.value },
      }),
    };
  },
};
