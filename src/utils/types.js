const validationMap = ['String', 'Object', 'Number', 'Function', 'Boolean', 'Array'];

const types = {
  is: value => {
    return (
      value &&
      Object.prototype.toString.call(value).match(/^\[object\s(.*)\]$/)[1]
    );
  },
  isElement: value => {
    const type = types.is(value);
    return /HTML(.*)Element|NodeList/g.test(type);
  },
  ...validationMap.reduce((acc, type) => {
    return { ...acc, [`is${type}`]: (value) => (value && types.is(value) === type) }
  }, {}),
};

export default types;
