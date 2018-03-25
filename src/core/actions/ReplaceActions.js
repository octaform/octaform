import PATTERNS from '../constants/patterns';
import { isArray, isObject, isString, isNumber, isBoolean, get } from '../../helpers';

const ReplaceActions = {
  message: {
    error(msg = '', ...args) {
      const params = (msg.match(PATTERNS.MESSAGE.PARAMS) || []);
      return params.reduce((acc, current, index) => acc.replace(current, args[index]), msg);
    },
    validation(msg, params){
      const searchItems = msg.match(PATTERNS.MESSAGE.PARAMS);

      if (searchItems) {
        return searchItems.reduce((acc, current) => {
          const pureKey = current.replace(PATTERNS.MESSAGE.BRACES, '');

          const map = {
            [isString(params) || isNumber(params) || isBoolean(params)]: params,
            [isArray(params)]: params[pureKey],
            [isObject(params)]: get(params, pureKey, current),
          };

          return acc.replace(current, map.true);
        }, msg);
      }

      return msg;
    },
  },
};

export default ReplaceActions;
