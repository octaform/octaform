import Validate from './rules/Validate';

export default {
  validator: Validate.getAll(),
  validate: Validate.apply,
};
