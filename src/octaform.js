import Validate from '@rules/Validate';

export const validator = Validate.getAll();
export const validate = Validate.apply;
export const version = VERSION;

export default {
  validator,
  validate,
  version,
};
