import Validate from './rules/Validate';

module.exports = {
  validator: Validate.getAll(),
  validateAll: Validate.apply,
};
