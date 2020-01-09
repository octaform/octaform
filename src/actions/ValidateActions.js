import ErrorActions from './ErrorActions';
import MessageActions from './MessageActions';
import State from '@states';
import utilTypes from '@utils/util-types';

const ValidateActions = {
  getAll() {
    return State.validations;
  },
  set(name, fn) {
    State.validations[name] = fn;
  },
  add(validationList) {
    if (
      utilTypes.isArray(validationList) ||
      utilTypes.isObject(validationList)
    ) {
      const validations = utilTypes.isObject(validationList)
        ? [validationList]
        : validationList;

      validations.forEach(({ name, message, paramType, fn }) => {
        const hasParams =
          utilTypes.isString(name) &&
          utilTypes.isFunction(fn) &&
          utilTypes.isString(message);

        if (hasParams && paramType) {
          fn.paramType = paramType;
        }

        if (hasParams && message) {
          MessageActions.set(name, message);
          ValidateActions.set(name, fn);
        }

        if (!message) ErrorActions.set('msg', name);
        if (!hasParams) ErrorActions.set('add');
      });
    } else {
      ErrorActions.set('add', validationList);
    }
  },
};

State.validations = {
  add: ValidateActions.add,
};

export default ValidateActions;
