import { Schema, Types } from "@octaform/core";

class Schema {
  constructor(schema) {
    this.validate = Octaform.validate;
    this.validateAll = Octaform.validateAll;
  }
}

schema.fields({
  name: 'value'
})

schema.validate({ name: 'value' })
schema.validateAll()

export default Schema;

// const schema = new Schema({
//   name: {
//     required: true,
//     string: true,
//   },
//   validation: {
//     rules: {
//       required: true,
//       function: true
//     }
//   }, 
//   message: {
//     rules: {
//       required: true,
//       string: true
//     }
//   }
// })
