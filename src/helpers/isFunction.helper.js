import { isType } from './isType.helper';

export const isFunction = value => (isType(value) === 'Function');
