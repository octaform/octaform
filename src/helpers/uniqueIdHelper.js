
import randomHash from './randomHashHelper';

const uniqueId = (prefix = '') => {
  if (prefix) prefix = prefix.concat('_');
  return `${prefix + randomHash()}`;
};

export default uniqueId;
