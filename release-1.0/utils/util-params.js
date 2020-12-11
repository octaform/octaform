// ...{} - To array params
const spreadList = (string = '') => {
  return /\.\.\.\{(.*?)\}/g.exec(string);
};

const convertType = (rule = {}, param) => {
  const paramType = rule.paramType;
  return paramType ? paramType(param) : param;
};

// min:3 - Short validation
const shortStringValidation = (string, validations = {}) => {
  const map = /^(\w+):(\w+)$/g.exec(string);

  return map
    ? { [map[1]]: convertType(validations[map[1]], map[2]) }
    : { [string]: true };
};

export default {
  spreadList,
  convertType,
  shortStringValidation,
};
