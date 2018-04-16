import ModelActions from '../../../src/actions/ModelActions';
import State from '../../../src/states';

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

describe('Actions :: ModelActions', () => {
  test('Test: .set(name, rules = {}, messages = {}) :: Check undefined rules', () => {
    const modelToResult = {
      rules: {},
      messages: { minlength: 'At least {0} chars' },
    };

    ModelActions.set({
      name: 'MyModel',
      messages: { minlength: 'At least {0} chars' },
    });

    expect(State.models.MyModel).toEqual(modelToResult);
  });

  test('Test: .set(name, rules = {}, messages = {}) :: Check undefined messages', () => {
    const modelToSet = {
      name: 'MyModel',
      rules: { required: true },
    };
    const modelToResult = {
      rules: { required: true },
      messages: {},
    };

    ModelActions.set(modelToSet);
    expect(State.models.MyModel).toEqual(modelToResult);
  });

  test('Test: .set(name, rules = {}, messages = {}) :: Check model values', () => {
    ModelActions.set(model);
    
    expect(State.models.MyModel).toEqual({
      rules: model.rules,
      messages: model.messages,
    });
  });

  test('Test: .get(name) :: Check get model values', () => {
    const MyModel = ModelActions.get('MyModel');
    
    expect(MyModel).toEqual({
      rules: model.rules,
      messages: model.messages,
    });
  });

  test('Test: .get(name) :: Check wrong name', () => {
    const MyModel = ModelActions.get('ModelTest');
    expect(MyModel).toEqual({});
  });

  test('Test: .getAll() :: Check getAll model values', () => {
    const models = ModelActions.getAll();
    
    expect(models).toEqual({
      MyModel: {
        rules: model.rules,
        messages: model.messages,
      },
    });
  });

  test('Test: .deleteAll() :: Check deleteAll model', () => {
    ModelActions.deleteAll();
    expect(State.models).toEqual({});
  });
});
