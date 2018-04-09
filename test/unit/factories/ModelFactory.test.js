import ModelFactory from '../../../src/factories/ModelFactory';
import ModelActions from '../../../src/actions/ModelActions';

const model = {
  name: 'MyModel',
  rules: {
    required: true,
    minlength: 3,
  },
  messages: {
    minlength: 'At least {0} chars',
  },
};

describe('Factory :: ModelFactory', () => {
  test('Test: .toUser(field, data) :: Check value when is string', () => {
    ModelActions.set(model);
    const validationMap = ModelFactory.toUser('firstName', 'MyModel');
    expect(validationMap).toEqual({
      firstName: {
        rules: model.rules,
        messages: model.messages,
      },
    });
  });

  test('Test: .toUser(field, data) :: Check value when model is not found', () => {
    ModelActions.set(model);
    const validationMap = ModelFactory.toUser('firstName', 'Teste');
    expect(validationMap).toEqual({ firstName: {} });
  });

  test('Test: .toUser(field, data) :: Check value when is object', () => {
    ModelActions.set(model);
    const value = 'DL123456';
    const param = { model: 'MyModel', value };
    const validationMap = ModelFactory.toUser('firstName', param);
    
    expect(validationMap).toEqual({
      firstName: {
        value,
        rules: model.rules,
        messages: model.messages,
      },
    });
  });
});
