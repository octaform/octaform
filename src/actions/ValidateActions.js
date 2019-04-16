import ErrorActions from './ErrorActions';
import MessageActions from './MessageActions';
import State from '../states';
import { isArray, isString, isFunction } from '../utils/util-types';

const ValidateActions = {
  getAll() {
    return State.validations;
  },
  set(name, fn) {
    State.validations[name] = fn;
  },
  add(listOfValidations) {
    if (isArray(listOfValidations)) {
      listOfValidations.forEach(({ name, message, paramType, fn }) => {
        const hasParams = (
          isString(name) 
            && isFunction(fn) 
            && isString(message)
        );

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
      ErrorActions.set('add', listOfValidations);
    }
  },
};

State.validations = {
  add: ValidateActions.add,
};

export default ValidateActions;
