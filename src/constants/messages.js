import Package from '../../package.json';

const anchorLink = {
  addMethod: `${Package.repository.url}#octaformvalidatoradd`,
  allSchema: `${Package.repository.url}#octaformvalidateschema`,
  paramType: `${Package.repository.url}#octaformvalidatoradd`,
  fieldName: `${Package.repository.url}#field-name-required`,
};

export default {
  CORE: {
    msg: `The #{validation} validation has no message set, please check out ${anchorLink.addMethod}`,
    field: `The #{field} field was not found, please check out ${anchorLink.fieldName}`,
    add: `The .add method has an invalid parameter, please check out ${anchorLink.addMethod}`,
    undefined: `The #{validation} validation method is not set, please check out ${anchorLink.addMethod}`,
    entry: `Invalid #{rule} entry point format, please check out ${anchorLink.allSchema}`,
    paramType: `The #{fieldName} field has an invalid type parameter in #{validation} validation, expected #{paramType}, please check out ${anchorLink.paramType}`,
    withoutAttrName: `Selected field does not have a name defined, please check out ${anchorLink.fieldName}`,
  },
};
