const stringToPath = path => {
  const containsBracketNotation = /\[[0-9]+\]/g;
  if (path.match(containsBracketNotation)) {
    path = path.replace(
      containsBracketNotation,
      s => `.${s.substring(1, s.length - 1)}`
    );
  }
  return path.split('.');
};

const get = (source, path, defaultArgument) => {
  return (
    stringToPath(path).reduce((nestedObject, key) => {
      return nestedObject && key in nestedObject ? nestedObject[key] : void 0;
    }, source) || defaultArgument
  );
};

export default {
  get,
};
