import PATTERNS from '../constants/patterns';
import { spreadList } from '../utils/util-params';
import { get } from '../utils/util-object';
import { isNumber, isBoolean, isString, isArray, isObject } from '../utils/util-types';

const ReplaceActions = {
  message: {
    error(msg = '', ...args) {
      const params = (msg.match(PATTERNS.MESSAGE.ERROR) || []);
      const hasMappedKeys = isObject(args[0]);

      return params.reduce((acc, current, index) => {
        let text = '';

        if (hasMappedKeys) {
          const keys = args[0];
          text = keys[current.replace(/#{(.*?)}/g, '$1')];
        } else {
          text = args[index];
        }
        
        return acc.replace(current, text);
      }, msg);
    },
    validation(msg = '', params){
      const searchItems = msg.match(PATTERNS.MESSAGE.PARAMS);
      const spreadParams = spreadList(msg);

      
      if (spreadParams && spreadParams.length){
        const text = params.join(spreadParams[1] || ', ');
        msg = msg.replace(spreadParams[0], text);
      }
      
      if (searchItems) {
        return searchItems.reduce((acc, current) => {
          const pureKey = current.replace(PATTERNS.MESSAGE.BRACES, '');
          let map = params || '';
          
          if (map) {
            if (isArray(params)) {
              map = params[pureKey];
            } else if (isObject(params)) {
              map = get(params, pureKey, current);
            }

            return acc.replace(current, map);
          }
          
          return acc;
        }, msg);
      }

      return msg;
    },
  },
};

export default ReplaceActions;
