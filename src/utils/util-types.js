export const types = {
  is: value => {
    return (
      value &&
      Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1]
    );
  },
  isString: value => {
    return value && types.is(value) === 'String';
  },
  isObject: value => {
    return types.is(value) === 'Object';
  },
  isNumber: value => {
    return types.is(value) === 'Number';
  },
  isFunction: value => {
    return types.is(value) === 'Function';
  },
  isBoolean: value => {
    return types.is(value) === 'Boolean';
  },
  isArray: value => {
    return value && Array.isArray(value);
  },
  isElement: value => {
    const type = types.is(value);
    return /HTML(.*)Element|NodeList/g.test(type);
  },
};

export default types;
