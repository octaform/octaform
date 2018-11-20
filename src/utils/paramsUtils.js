import { PATTERNS } from '../constants';

export default {
  get: {
    shortStringValidation(string) { // min:3 - Short validation
      const map = PATTERNS.SHORT_RULE.exec(string);

      return (
        map ?
          { [map[1]]: map[2] } :
          { [string]: true }
      );
    },
    spreadList(string) { // ...{} - To array params
      return PATTERNS.MESSAGE.LIST.exec(string);
    },
  },
};
