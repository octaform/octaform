const getNestedObject = (obj, dotSeparatedKeys, ...args) => {
  if (args.length > 1 && typeof dotSeparatedKeys !== 'string') return undefined;
  if (typeof obj !== 'undefined' && typeof dotSeparatedKeys === 'string') {
    const pathArr = dotSeparatedKeys.split('.');
    pathArr.forEach((key, idx, arr) => {
      if (typeof key === 'string' && key.includes('[')) {
        try {
          const pos = /\[([^)]+)\]/.exec(key)[1];
          const posLen = pos.length;
          arr.splice(idx + 1, 0, Number(pos));
          arr[idx] = key.slice(0, (-2 - posLen));
        } catch (e) { console.error(e); }
      }
    });
    obj = pathArr.reduce((o, key) => (o && o[key] !== 'undefined' ? o[key] : undefined), obj);
  }
  return obj;
};

const getSchemaMatch = (obj, objFromSchema) => {
  let result = false;
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    for (let i = 0; i < obj.length; i += 1) {
      if (!getSchemaMatch(obj[i], objFromSchema[i])) {
        result = false;
        break;
      }
      result = true;
    }
  } else if (Object.prototype.toString.call(obj) === '[object Object]') {
    for (const key in obj) {
      if (!getSchemaMatch(obj[key], objFromSchema[key])) {
        result = false;
        break;
      }
      result = true;
    }
  } else {
    return typeof objFromSchema === typeof obj;
  }
  return result;
};

const buildSchema = (schemaObject) => {
  if (Object.prototype.toString.call(schemaObject) === '[object Array]') {
    schemaObject.forEach(subObj => buildSchema(subObj));
  } else if (Object.prototype.toString.call(schemaObject) === '[object Object]') {
    Object.keys(schemaObject).forEach(subObj => buildSchema(schemaObject[subObj]));
  } else {
    return typeof schemaObject;
  }
  return schemaObject;
};

const convertSchemaAndGetMatch = (obj, schemaObject) => {
  const objectFromSchema = buildSchema(schemaObject);
  if (getSchemaMatch(obj, objectFromSchema)) { return obj; }
  return -1;
};

const get = (obj, nestedKeys) => {
  let input = obj;

  if (nestedKeys) {
    if (typeof nestedKeys === 'string') {
      input = getNestedObject(input, nestedKeys);
    } else {
      const checkSchema = convertSchemaAndGetMatch(input, nestedKeys);
      input = (checkSchema !== -1 ? checkSchema : obj);
    }
  }

  return input;
};

export default get;
