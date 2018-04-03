import PATTERNS from '../constants/patterns';
import paramsUtils from '../utils/paramsUtils';
import { isArray, isObject, isString, isNumber, isBoolean, get } from '../helpers';

const ReplaceActions = {
  message: {
    error(msg = '', ...args) {
      const params = (msg.match(PATTERNS.MESSAGE.ERROR) || []);
      return params.reduce((acc, current, index) => acc.replace(current, args[index]), msg);
    },
    validation(msg, params){
      const searchItems = msg.match(PATTERNS.MESSAGE.PARAMS);
      const listParams = paramsUtils.get.spreedList(msg);

      if (listParams){
        const text = params.join(listParams[1] || ', ');
        msg = msg.replace(listParams[0], text);
      }

      if (searchItems) {
        return searchItems.reduce((acc, current) => {
          const pureKey = current.replace(PATTERNS.MESSAGE.BRACES, '');

          const map = {
            [isString(params) || isNumber(params) || isBoolean(params)]: params,
            [isArray(params)]: params[pureKey],
            [isObject(params)]: get(params, pureKey, current),
          };

          return acc.replace(current, (map.true || ''));
        }, msg);
      }

      return msg;
    },
  },
};

export default ReplaceActions;
