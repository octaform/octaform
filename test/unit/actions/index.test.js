import {
  ErrorActions,
  ReplaceActions,
  MessageActions,
  ValidateActions,
} from '../../../src/actions';

describe('Actions :: IndexActions', () => {
  test('Test: import actions method', () => {
    expect(ErrorActions).toBeDefined();
    expect(ReplaceActions).toBeDefined();
    expect(MessageActions).toBeDefined();
    expect(ValidateActions).toBeDefined();
  });
});
