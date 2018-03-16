import { isType } from './isType.helper';

export const isString = value => (value && isType(value) === 'String');
