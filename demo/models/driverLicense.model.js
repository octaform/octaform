import Octaform from '../../src';

// Do you could create the .add with ([] or {});
Octaform.model.add([
  {
    name: 'ModelDL',
    rules: {
      required: true,
      minlength: 3,
    },
    messages: {
      minlength: 'At least {0} chars',
    },
  },
  {
    name: 'TesteMD',
    rules: {
      minlength: 2,
    },
  },
]);
