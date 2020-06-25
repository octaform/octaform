import pkg from "../../package.json";

export default () => {
  const year = () => {
    const createdAt = 2018;
    const currentYear = new Date().getFullYear();
    if (currentYear > createdAt) {
      return `${createdAt}-${currentYear}`;
    }

    return `${createdAt}`;
  };

  return (`
    /**
      * @license ${pkg.name} v${pkg.version}
      * ${pkg.repository.url}
      * Copyright (c) ${year()}, ${pkg.author}
      * Released under the ${pkg.license} License.
    */
  `).replace(/^\s+/gm, "");
};
