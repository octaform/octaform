import { isType } from './isType.helper';

export const isObject = value => (isType(value) === 'Object');
