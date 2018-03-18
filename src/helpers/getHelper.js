import _get from 'lodash/get';

const get = (object, path, defaultValue) => _get(object, path, defaultValue);

export default get;
