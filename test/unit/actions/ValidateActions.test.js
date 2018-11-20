import ValidateActions from '../../../src/actions/ValidateActions';
import State from '../../../src/states';
import MESSAGES from '../../../src/constants/messages';

describe('Actions :: ValidateActions', () => {
  test('Test: .set(name, fn) :: Defined', () => {
    ValidateActions.set('email', () => 'Defined function');
    expect(State.validations.email).toBeDefined();
  });

  test('Test: .add([{ name, fn, message }]) :: Defined', () => {
    const mapper = [{
      name: 'email',
      message: 'email field is required',
      fn: () => true,
    }];

    ValidateActions.add(mapper);

    expect(State.validations.email).toBeDefined();
    expect(State.messages.validator.email).toBeDefined();
  });

  test('Test: .add([{ name, fn, message }]) :: Add param is not a list', () => {
    expect(() => {
      ValidateActions.add('My validation string');
    }).toThrowError(MESSAGES.CORE.add);
  });

  test('Test: .add([{ name, fn, message }]) :: Was not defined a message to validation', () => {
    const msg = 'email has not been defined a validation message';
    const mapper = [{
      name: 'email',
      fn: () => true,
    }];

    expect(() => {
      ValidateActions.add(mapper);
    }).toThrowError(msg);
  });

  test('Test: .add([{ name, fn, message }]) :: Was not defined a function to validate', () => {
    const mapper = [{
      name: 'email',
      message: 'email field is required',
    }];

    expect(() => {
      ValidateActions.add(mapper);
    }).toThrowError(MESSAGES.CORE.add);
  });

  test('Test: .getAll() :: Is defined all validations', () => {
    const definedValidations = ValidateActions.getAll();
    expect(definedValidations.add).toBeDefined();
    expect(definedValidations.email).toBeDefined();
  });
});
