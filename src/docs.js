import Octaform, { Schema, Types } from "@octaform/core";
import validation from "@octaform/validation";

Octaform.extend([
  validation.required,
  validation.email,
  validation.minlength,
  validation.valueNotEquals,
  validation.ref
]);

const schema = new Schema({
  username: {
    default: "", // Is it worth to be implemented??
    type: Types.string,
    rules: {
      required: true,
      minlength: 4,
      letter: true
    },
    messages: {
      required: "My custom required message ${field}, ${value}"
    }
  }
});

schema.validate({fields}, {options});
schema.validateAll({options});

Octaform.validate({fields}, schema, {options});
