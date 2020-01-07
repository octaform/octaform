const URL = {
  addMethod: `${REPO_URL}#octaformvalidatoradd`,
  allSchema: `${REPO_URL}#octaformvalidateschema`,
  paramType: `${REPO_URL}#octaformvalidatoradd`,
  fieldName: `${REPO_URL}#field-name-required`,
};

export default {
  CORE: {
    msg: `The #{validation} validation has no message set, please check out ${URL.addMethod}`,
    field: `The #{field} field was not found, please check out ${URL.fieldName}`,
    add: `The .add method has an invalid parameter, please check out ${URL.addMethod}`,
    undefined: `The #{validation} validation method is not set, please check out ${URL.addMethod}`,
    entry: `Invalid #{rule} entry point format, please check out ${URL.allSchema}`,
    paramType: `The #{fieldName} field has an invalid type parameter in #{validation} validation, expected #{paramType}, please check out ${URL.paramType}`,
  },
};
