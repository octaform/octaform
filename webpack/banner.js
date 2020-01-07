const webpack = require('webpack');
const Package = require('../package.json');

const banner = () => {
  const year = () => {
    const createdAt = 2018;
    const currentYear = new Date().getFullYear();
    if (currentYear > createdAt) {
      return `${createdAt}-${currentYear}`;
    }

    return `${createdAt}-present`;
  };

  return new webpack.BannerPlugin({
    banner: (`
/**
 * @license ${Package.name} v${Package.version}
 * ${Package.repository.url}
 * Copyright (c) ${year()}, ${Package.author}
 * Released under the ${Package.license} License.
 * For license information please see LICENSE
 */
    `),
    raw: true,
    entryOnly: true
  });
};

module.exports = banner;
