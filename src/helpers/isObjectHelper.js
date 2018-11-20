import isType from './isTypeHelper';

const isObject = value => (isType(value) === 'Object');

export default isObject;
