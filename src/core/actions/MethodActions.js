import { ErrorActions } from '../actions/ErrorActions';
import { MessageActions } from '../actions/MessageActions';
import { isString, isFunction } from '../../helpers';
import State from '../states';

export const MethodActions = {
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
      MethodActions.set(name, fn);
    }

    if (!hasParams) ErrorActions.reference('add');
    if (!msg) ErrorActions.reference('msg', name);
  },
};

State.validations = {
  add: MethodActions.add,
};
