import StringEntry from '../../../src/entries/StringEntry';

describe('Rules/Entries :: StringEntry', () => {
  test('Test: Check object string rule - (email)', () => {
    const resultObj = StringEntry('email');
    expect(resultObj).toEqual({ 
      rules: { email: true }, 
      messages: {},
    });
  });

  test('Test: Check object string with short rule - (minlength:3)', () => {
    const resultObj = StringEntry('minlength:3');
    expect(resultObj).toEqual({
      rules: { minlength: '3' },
      messages: {},
    });
  });
});
