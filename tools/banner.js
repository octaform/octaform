const Package = require('../package.json');

module.exports = () => {
  const year = () => {
    const createdAt = 2018;
    const currentYear = new Date().getFullYear();
    if (currentYear > createdAt) {
      return `${createdAt}-${currentYear}`;
    }

    return `${createdAt}-present`;
  };

  return (`
/**
  * @license ${Package.alias} v${Package.version}
  * ${Package.repository.url}
  * Copyright (c) ${year()}, ${Package.author}
  * Released under the ${Package.license} License.
*/
`);
};
