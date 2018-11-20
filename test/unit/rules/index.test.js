import { Validate, Rules } from '../../../src/rules/index';

describe('Rules :: Index', () => {
  test('Test: Should be defined Validate()', () => {
    expect(Validate).toEqual({
      getAll: expect.any(Function),
      apply: expect.any(Function),
    });
  });

  test('Test: Should be defined Rules()', () => {
    expect(Rules).toEqual({
      apply: expect.any(Function),
    });
  });
});
