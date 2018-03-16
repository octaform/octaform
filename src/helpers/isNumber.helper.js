import { isType } from './isType.helper';

export const isNumber = value => (isType(value) === 'Number');
