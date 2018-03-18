import isType from './isTypeHelper';

const isFunction = value => (isType(value) === 'Function');

export default isFunction;
