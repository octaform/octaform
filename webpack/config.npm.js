const Package = require('../package.json');

module.exports = {
  package: {
    name: Package.name,
    version: Package.version,
    description: Package.description,
    main: 'index.js',
    repository: Package.repository,
    author: Package.author,
    license: Package.license,
    bugs: Package.bugs,
    homepage: Package.homepage,
    engines: Package.engines,
    keywords: Package.keywords,
    dependencies: {},
  },
};
