import Package from '../../package.json';

const URL = {
  addMethod: `${Package.repository.url}#octaformvalidatoradd`,
  allSchema: `${Package.repository.url}#octaformvalidateschema`,
  paramType: `${Package.repository.url}#octaformvalidatoradd`,
  fieldName: `${Package.repository.url}#field-name-required`,
};

export default {
  CORE: {
    msg: `Validation #{method} has no message defined, please check out ${URL.addMethod}`,
    field: `Field #{selector} was not found, please check out ${URL.fieldName}`,
    add: `Add method has an invalid parameter, please check out ${URL.addMethod}`,
    undefined: `Validation method #{method} is not defined, please check out ${URL.addMethod}`,
    entry: `Invalid entrypoint format #{rules}, please check out ${URL.allSchema}`,
    paramType: `Invalid parameter in #{validation} of field #{fieldName}, expected #{paramType}, please check out ${URL.paramType}`,
  },
};
