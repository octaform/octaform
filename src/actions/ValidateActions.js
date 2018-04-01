import ErrorActions from './ErrorActions';
import MessageActions from './MessageActions';
import { isString, isFunction, isArray } from '../helpers';
import State from '../states';

const ValidateActions = {
  getAll() {
    return State.validations;
  },
  set(name, fn) {
    State.validations[name] = fn;
  },
  add(mapper) {
    if (isArray(mapper)) {
      mapper.forEach(({ name, fn, message }) => {
        const hasParams = (isString(name) && isFunction(fn) && isString(message));

        if (hasParams && message) {
          MessageActions.set(name, message);
          ValidateActions.set(name, fn);
        }

        if (!message) ErrorActions.set('msg', name);
        if (!hasParams) ErrorActions.set('add');
      });
    } else {
      ErrorActions.set('add', mapper);
    }
  },
};

State.validations = {
  add: ValidateActions.add,
};

export default ValidateActions;
