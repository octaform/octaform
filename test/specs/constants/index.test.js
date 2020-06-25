import * as constants from '../../../src/constants';

describe('Constants :: Constants export', () => {
  test('Test: constants export', () => {
    expect(Object.keys(constants)).toEqual(['PATTERNS', 'MESSAGES']);
    expect(Object.keys(constants)).toHaveLength(2);
  });
});
