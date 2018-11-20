import isType from './isTypeHelper';

const isString = value => (value && isType(value) === 'String');

export default isString;
