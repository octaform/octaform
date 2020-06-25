import Octaform from '../../src/octaform';

describe('Index :: Octaform', () => {
  test('Test: Validator Instance', () => {
    expect(Octaform.validator).toBeDefined();
  });

  test('Test: Validate Instance', () => {
    expect(Octaform.validate).toBeDefined();
  });
});
