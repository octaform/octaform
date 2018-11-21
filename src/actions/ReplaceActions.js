import PATTERNS from '../constants/patterns';
import paramsUtils from '../utils/paramsUtils';
import Helpers from '../helpers';

const ReplaceActions = {
  message: {
    error(msg = '', ...args) {
      const params = (msg.match(PATTERNS.MESSAGE.ERROR) || []);
      return params.reduce((acc, current, index) => acc.replace(current, args[index]), msg);
    },
    validation(msg, params){
      const searchItems = msg.match(PATTERNS.MESSAGE.PARAMS);
      const listParams = paramsUtils.get.spreadList(msg);

      if (listParams){
        const text = params.join(listParams[1] || ', ');
        msg = msg.replace(listParams[0], text);
      }

      if (searchItems) {
        return searchItems.reduce((acc, current) => {
          const pureKey = current.replace(PATTERNS.MESSAGE.BRACES, '');

          const map = {
            [Helpers.types.isString(params) || Helpers.types.isNumber(params) || Helpers.types.isBoolean(params)]: params,
            [Helpers.types.isArray(params)]: params[pureKey],
            [Helpers.types.isObject(params)]: Helpers.get(params, pureKey, current),
          };

          return acc.replace(current, (map.true || ''));
        }, msg);
      }

      return msg;
    },
  },
};

export default ReplaceActions;
