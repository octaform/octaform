export default {
  firstName: {
    // value: 'field value', // (Optional)
    rules: {
      required: true,
      minlength: 4,
      // array: [
      //   '(Array:0)',
      //   '(Array:1)',
      //   '(Array:2)',
      // ],
      // object: {
      //   key1: '(Key:0)',
      //   key2: {
      //     key3: [{
      //       key4: '(key:4)',
      //     }],
      //   },
      // },
    },
    messages: { 
      // (Optional, if not set will be use default message from validation)
      required: 'First Name is required',
    },
  },
  lastName: 'minlength:3',
  email: 'email',
  country: {
    rules: {
      required: true,
      valueNotEquals: 'BR',
    },
  },
  file: {
    rules: {
      required: true,
      extension: ['png', 'csv'],
      maxsize: 1197310,
    },
  },
};
