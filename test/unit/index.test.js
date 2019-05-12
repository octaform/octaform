import Octaform from '../../src';

describe('Index :: Octaform', () => {
  test('Test: Validator Instance', () => {
    expect(Octaform.validator).toBeDefined();
  });

  test('Test: Validate Instance', () => {
    expect(Octaform.validate).toBeDefined();
  });
});
