import isType from './isTypeHelper';

const isNumber = value => (isType(value) === 'Number');

export default isNumber;
