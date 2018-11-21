import Package from '../../package.json';

export default {
  CORE: {
    msg: `The validation #{method} has not been defined a message, please check out ${Package.repository.url}#validator-method-octaformvalidatoradd`,
    field: `Field #{selector} was not found, please check out ${Package.repository.url}#validation-schema`,
    add: `Add method accept only a list of object: [{ name: String, message: String, fn: Function }], please check out ${Package.repository.url}#validator-method-octaformvalidatoradd`,
    undefined: `The validation #{method} is not defined, please check out ${Package.repository.url}#validator-method-octaformvalidatoradd`,
    entry: `The entrypoint #{rules} has an invalid format, please check out ${Package.repository.url}#validation-schema`,
  },
};
