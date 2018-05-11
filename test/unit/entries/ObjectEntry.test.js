import ObjectEntry from '../../../src/entries/ObjectEntry';

const ObjToTest = {
  value: 'field value',
  rules: {
    required: true,
    minlength: 4,
  },
  messages: {
    required: 'First Name is required',
  },
};

describe('Entries :: ObjectEntry', () => {
  test('Test: Has right format in object entry (With value prop)', () => {
    const resultObj = ObjectEntry(ObjToTest);
    expect(resultObj).toEqual(ObjToTest);
  });

  test('Test: Has right format in object entry (Without value prop)', () => {
    delete ObjToTest.value;
    const resultObj = ObjectEntry(ObjToTest);
    expect(resultObj).not.toHaveProperty('value');
  });

  test('Test: Has right format in object entry (Without messages prop)', () => {
    delete ObjToTest.messages;
    const resultObj = ObjectEntry(ObjToTest);
    ObjToTest.messages = {};
    expect(resultObj).toEqual(ObjToTest);
  });
});
