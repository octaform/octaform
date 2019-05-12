import Validate from './rules/Validate';

module.exports = {
  validator: Validate.getAll(),
  validate: Validate.apply,
};
