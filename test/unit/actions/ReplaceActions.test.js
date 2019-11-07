import ReplaceActions from '../../../src/actions/ReplaceActions';
import MESSAGES from '../../../src/constants/messages';

describe('Actions :: ReplaceActions', () => {
  test('Test: .message.error(msg = "", ...args) :: Check replace value', () => {
    const replacedText = ReplaceActions.message.error(MESSAGES.CORE.msg, ['email']);
    const result = `${MESSAGES.CORE.msg}`.replace('#{validation}', 'email');
    expect(replacedText).toEqual(result);
  });

  test('Test: .message.error(msg = "", ...args) :: Check empty msg', () => {
    const replacedText = ReplaceActions.message.error(undefined);
    expect(replacedText).toBeDefined();
  });

  test('Test: .message.validation(msg, params) :: Check replace msg params', () => {
    const msg = 'Please enter at least {0} characters';
    const replacedText = ReplaceActions.message.validation(msg, 4);
    const result = 'Please enter at least 4 characters';
    expect(replacedText).toEqual(result);
  });

  test('Test: .message.validation(msg, params) :: Check replace msg params - string', () => {
    const msg = 'Please enter at least {0} characters';
    const params = 'four';
    const replacedText = ReplaceActions.message.validation(msg, params);
    const result = 'Please enter at least four characters';
    expect(replacedText).toEqual(result);
  });

  test('Test: .message.validation(msg, params) :: Check replace msg params - array', () => {
    const msg = 'Please enter at least {1} characters';
    const params = [34, 25];
    const result = 'Please enter at least 25 characters';
    const replacedText = ReplaceActions.message.validation(msg, params);
    expect(replacedText).toEqual(result);
  });

  test('Test: .message.validation(msg, params) :: Check replace msg params - object', () => {
    const msg = 'Your name must be {info.firstName}';
    const result = 'Your name must be Abreu';
    const params = { info: { firstName: 'Abreu' }};
    const replacedText = ReplaceActions.message.validation(msg, params);
    expect(replacedText).toEqual(result);
  });

  test('Test: .message.validation(msg, params) :: Check replace spread string', () => {
    const msg = 'Please choose a file with a valid extension: (...{})';
    const params = ['png', 'jpg'];
    const result = 'Please choose a file with a valid extension: (png, jpg)';
    const replacedText = ReplaceActions.message.validation(msg, params);
    expect(replacedText).toEqual(result);
  });

  test('Test: .message.validation(msg, params) :: Check replace spread string with custom separator', () => {
    const msg = 'Please choose a file with a valid extension: (...{ - })';
    const params = ['png', 'jpg'];
    const result = 'Please choose a file with a valid extension: (png - jpg)';
    const replacedText = ReplaceActions.message.validation(msg, params);
    expect(replacedText).toEqual(result);
  });

  test('Test: .message.validation(msg, params) :: Check without params', () => {
    const msg = 'email is required';
    const replacedText = ReplaceActions.message.validation(msg, true);
    expect(replacedText).toEqual(msg);
  });

  test('Test: .message.validation(msg, params) :: Check with param', () => {
    const msg = 'My name is {name}';
    const replacedText = ReplaceActions.message.validation(msg, 'Greg');
    expect(replacedText).toEqual('My name is Greg');
  });

  test('Test: .message.validation(msg, params) :: Check with undefined message', () => {
    const replacedText = ReplaceActions.message.validation(undefined, 'Greg');
    expect(replacedText).toEqual('');
  });

  test('Test: .message.validation(msg, params) :: Check with undefined params', () => {
    const replacedText = ReplaceActions.message.validation('My name is {name}', undefined);
    expect(replacedText).toEqual('My name is {name}');
  });
});
