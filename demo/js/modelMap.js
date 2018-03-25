import Octaform from '../../src/core';

const FieldMap = Octaform.model.use({
  firstName: 'ModelDL',
  lastName: { model: 'TesteMD', value: 'DL123456' },
});

export default FieldMap;
