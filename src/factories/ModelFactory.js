import { isString, isObject } from '../helpers';
import ModelActions from '../actions/ModelActions';

export default {
  toUser(fieldName, fieldModel){
    const model = {
      [isString(fieldModel)]: ModelActions.get(fieldModel),
      [isObject(fieldModel)]: ModelActions.get(fieldModel.model),
    };

    return {
      [fieldName]: Object.assign(model.true, {
        ...isObject(fieldModel) && { value: fieldModel.value },
      }),
    };
  },
};
