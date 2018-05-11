import ArrayEntry from '../../../src/entries/ArrayEntry';

const ObjToTest = {
  rules: ['required', 'minlength:3'],
};

describe('Entries :: ArrayEntry', () => {
  test('Test: Convert string to object and return the rules', () => {
    const resultObj = ArrayEntry(ObjToTest.rules);
    expect(resultObj).toEqual({
      required: true,
      minlength: '3',
    });
  });

  test('Test: Convert string to object with empty value rule', () => {
    const resultObj = ArrayEntry();
    expect(resultObj).toEqual({});
  });
});
