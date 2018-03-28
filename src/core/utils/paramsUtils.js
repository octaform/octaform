import { PATTERNS } from '../constants';

const params = {
  get: {
    list(string) {
      const map = PATTERNS.LIST_RULE.exec(string);

      return (
        map ?
          { [map[1]]: map[2] } :
          { [string]: true }
      );
    },
  },
};

export default params;
