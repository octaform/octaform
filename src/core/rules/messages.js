import get from 'lodash/get';
import { PATTERNS } from '../constants';
import { isArray, isObject, isString, isNumber } from '../../helpers';

export default {
  messages: {},
  getAll(){
    return this.messages;
  },
  set(name, msg){
    this.messages[name] = msg;
  },
  setDictionary(objMessages){
    this.messages = Object.assign(
      this.messages,
      objMessages || {},
    );
  },
  replace(msg, params){
    const searchItems = msg.match(PATTERNS.MESSAGE.PARAMS);

    if (searchItems) {
      return searchItems.reduce((acc, current) => {
        const pureKey = current.replace(PATTERNS.MESSAGE.BRACES, '');

        if (isString(params) || isNumber(params)) {
          acc = msg.replace(current, params);
        }

        if (isArray(params)){
          acc = acc.replace(current, params[pureKey]);
        }

        if (isObject(params)){
          const objValue = get(params, pureKey, current);
          acc = acc.replace(current, objValue);
        }

        return acc;
      }, msg);
    }

    return msg;
  },
};
