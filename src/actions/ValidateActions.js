import ErrorActions from './ErrorActions';
import MessageActions from './MessageActions';
import Helpers from '../helpers';
import State from '../states';

const ValidateActions = {
  getAll() {
    return State.validations;
  },
  set(name, fn) {
    State.validations[name] = fn;
  },
  add(listOfValidations) {
    if (Helpers.types.isArray(listOfValidations)) {
      listOfValidations.forEach(({ name, fn, message }) => {
        const hasParams = (Helpers.types.isString(name) && Helpers.types.isFunction(fn) && Helpers.types.isString(message));

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
