import States from '../../../src/states/index';

describe('States :: Index', () => {
  test('Test: State should have an pre-defined schema', () => {
    expect(States).toEqual({
      validations: expect.any(Object),
      messages: expect.objectContaining({
        fields: expect.any(Object),
        core: expect.any(Object),
        validator: expect.any(Object),
      }),
    });
  });
});
