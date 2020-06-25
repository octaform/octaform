import ErrorActions from '../../../src/actions/ErrorActions';

describe('Actions :: ErrorActions', () => {
  test('Test: .set(undefined)', () => {
    expect(() => {
      ErrorActions.set('undefined', 'method');
    }).toThrow();
  });
});
