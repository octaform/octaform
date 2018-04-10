import uniqueIdHelper from '../../../src/helpers/uniqueIdHelper';

const defaultIdLength = 13;

describe('Helpers :: uniqueIdHelper', () => {
  test('Test: .uniqueId(prefix = "") :: Unique id length', () => {
    const id = uniqueIdHelper();
    expect(id).toHaveLength(defaultIdLength);
  });

  test('Test: .uniqueId(prefix = "") :: Unique id prefix', () => {
    const id = uniqueIdHelper('test');
    expect(id).toContain('test_');
  });
});
