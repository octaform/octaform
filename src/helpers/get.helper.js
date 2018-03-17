import _get from 'lodash/get';

export const get = (object, path, defaultValue) => _get(object, path, defaultValue);
