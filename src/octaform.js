import state from './state';
import extend from './extend';

const Octaform = { 
  extend,
  validator: state.validator,
  validate: () => {},
  validateAll: () => {},
  version: "2.0.0",
  Schema: class Schema {
    constructor() {
      this.validate = Octaform.validate;
      this.validateAll = Octaform.validateAll;
    }
  },
  Types: {}
}

// export const extend = Octaform.extend;
// export const validator = Octaform.validator;
// export const validate = Octaform.validate;
// export const validateAll = Octaform.validateAll;
// export const version = Octaform.version;
// export const Schema = Octaform.Schema;
// export const Types = Octaform.Types;

export default Octaform;
