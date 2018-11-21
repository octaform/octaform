const Types = {
  is(value) {
    return (value && Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1]);
  },
  isString(value) {
    return (value && Types.is(value) === 'String');
  },
  isObject(value){
    return (Types.is(value) === 'Object');
  },
  isNumber(value){
    return (Types.is(value) === 'Number');
  },
  isFunction(value){
    return (Types.is(value) === 'Function');
  },
  isBoolean(value) {
    return (Types.is(value) === 'Boolean');
  },
  isArray(value){
    return (value && Array.isArray(value));
  },
};

export default Types;
