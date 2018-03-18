import ErrorActions from './ErrorActions';
import MessageActions from './MessageActions';
import { isString, isFunction } from '../../helpers';
import State from '../states';

const ValidateActions = {
  getAll() {
    return State.validations;
  },
  set(name, fn) {
    State.validations[name] = fn;
  },
  add(name, fn, msg) {
    const hasParams = (isString(name) && isFunction(fn) && isString(msg));

    if (hasParams && msg) {
      MessageActions.set(name, msg);
      ValidateActions.set(name, fn);
    }

    if (!hasParams) ErrorActions.set('add');
    if (!msg) ErrorActions.set('msg', name);
  },
};

State.validations = {
  add: ValidateActions.add,
};

export default ValidateActions;
