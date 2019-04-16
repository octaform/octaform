import Package from '../../package.json';

const URL = {
  addMethod: `${Package.repository.url}#validator-method-octaformvalidatoraddarrayobject`,
  allSchema: `${Package.repository.url}#validator-method-octaformvalidateallschema`,
  paramType: `${Package.repository.url}#teste`,
  unsupportedParam: `${Package.repository.url}#teste`,
  fieldName: `${Package.repository.url}#field-name-required`,
};

export default {
  CORE: {
    msg: `The validation #{method} has not been defined a message, please check out ${URL.addMethod}`,
    field: `Field #{selector} was not found, please check out ${URL.fieldName}`,
    add: `Add method accept only a list of object, please check out ${URL.addMethod}`,
    undefined: `The validation #{method} is not defined, please check out ${URL.addMethod}`,
    entry: `The entrypoint #{rules} has an invalid format, please check out ${URL.allSchema}`,
    paramType: `The field #{fieldName} in #{validation} validation expects a parameter of the type #{paramType}, please check out ${URL.paramType}`,
    unsupportedParam: `#{validation} validation only supports alphanumeric characters as parameter, please check out ${URL.unsupportedParam}`,
  },
};
