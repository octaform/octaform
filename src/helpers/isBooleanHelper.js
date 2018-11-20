import isType from './isTypeHelper';

const isBoolean = value => (isType(value) === 'Boolean');

export default isBoolean;
