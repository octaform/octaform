import Messages from './messages';
import { Errors } from '../actions';
import { isString, isFunction } from '../../helpers';

const Methods = {
  validations: {},
  getAll() {
    return this.validations;
  },
  set(name, fn) {
    this.validations[name] = fn;
  },
  add(name, fn, msg) {
    const hasParams = (isString(name) && isFunction(fn) && isString(msg));

    if (hasParams && msg) {
      Messages.set(name, msg);
      Methods.set(name, fn);
    }

    if (!hasParams) Errors.reference('addMethod');
    if (!msg) Errors.reference('msg', name);
  },
};

Methods.validations = {
  add: Methods.add,
};

export default Methods;
