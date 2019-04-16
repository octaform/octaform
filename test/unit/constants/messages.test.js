import messages from '../../../src/constants/messages';

describe('Constants :: Constants messages export', () => {
  test('Test: constants messages export', () => {
    expect(Object.keys(messages)).toEqual(['CORE']);
    expect(Object.keys(messages)).toHaveLength(1);
  });
});
