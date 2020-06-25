import MessageActions from '../../../src/actions/MessageActions';
import State from '../../../src/states';

describe('Actions :: MessageActions', () => {
  test('Test: .set(name, msg) :: Defined', () => {
    MessageActions.set('email', 'field email is required');
    expect(State.messages.validator.email).toBeDefined();
  });

  test('Test: .set(name, msg) :: Check value', () => {
    MessageActions.set('email', 'field email is required');
    expect(State.messages.validator.email).toBe('field email is required');
  });

  test('Test: .setCustomFieldMsg(field, userMessages) :: Check value', () => {
    const customFieldMessage = { required: 'First Name is required' };
    MessageActions.setCustomFieldMsg('firstName', customFieldMessage);
    expect(State.messages.fields).toEqual({ firstName: customFieldMessage });
  });
});
