import ValidateActions from '../../../src/actions/ValidateActions';
import ReplaceActions from '../../../src/actions/ReplaceActions';
import State from '../../../src/states';
import MESSAGES from '../../../src/constants/messages';

describe('Actions :: ValidateActions', () => {
  test('Test: .set(name, fn) :: Defined', () => {
    ValidateActions.set('email', () => 'Defined function');
    expect(State.validations.email).toBeDefined();
  });

  test('Test: .add([{ name, fn, message }]) :: Add method is defined', () => {
    const mapper = [{
      name: 'email',
      message: 'email field is required',
      fn: () => true,
    }];

    ValidateActions.add(mapper);

    expect(State.validations.email).toBeDefined();
    expect(State.messages.validator.email).toBeDefined();
  });

  test('Test: .add([{ name, fn, message }]) :: Validation defined as object instead', () => {
    const mapper = {
      name: 'counter',
      message: 'counter field is required',
      fn: () => true,
    };

    ValidateActions.add(mapper);

    expect(State.validations.counter).toBeDefined();
    expect(State.messages.validator.counter).toBeDefined();
  });

  test('Test: .add([{ name, fn, message }]) :: Parameter not a list', () => {
    expect(() => {
      ValidateActions.add('My validation string');
    }).toThrowError(MESSAGES.CORE.add);
  });

  test('Test: .add([{ name, fn, message }]) :: Validation message was not defined', () => {
    const replacedText = ReplaceActions.message.error(MESSAGES.CORE.msg, 'email');
    const mapper = [{
      name: 'email',
      fn: () => true,
    }];

    expect(() => {
      ValidateActions.add(mapper);
    }).toThrowError(replacedText);
  });

  test('Test: .add([{ name, fn, message }]) :: Validation function was not defined', () => {
    const mapper = [{
      name: 'email',
      message: 'email field is required',
    }];

    expect(() => {
      ValidateActions.add(mapper);
    }).toThrowError(MESSAGES.CORE.add);
  });

  test('Test: .add([{ name, message, paramType, fn }]) :: Validation paramType is defined', () => {    
    ValidateActions.add([{
      name: 'email',
      message: 'email field is required',
      paramType: String,
      fn: value => value,
    }]);

    const validations = ValidateActions.getAll();
    expect(validations.email.paramType).toBeInstanceOf(Function);
  });

  test('Test: .getAll() :: All validations is defined', () => {
    const definedValidations = ValidateActions.getAll();
    expect(definedValidations.add).toBeDefined();
    expect(definedValidations.email).toBeDefined();
  });
});
