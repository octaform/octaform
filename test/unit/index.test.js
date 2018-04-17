import Plugin from '../../src';

const Octaform = new Plugin();

describe('Index :: Octaform', () => {
  test('Test: Validator Instance', () => {
    expect(Octaform.validator).toBeDefined();
  });

  test('Test: ValidateAll Instance', () => {
    expect(Octaform.validateAll).toBeDefined();
  });
});
