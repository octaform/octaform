import randomHashHelper from '../../../src/helpers/randomHashHelper';

const defaultHashLength = 13;

describe('Helpers :: RandomHashHelper', () => {
  test('Test: .ramdom(count= 1) :: Hash length default', () => {
    const hash = randomHashHelper();
    expect(hash).toHaveLength(defaultHashLength);
  });

  test('Test: .ramdom(count= 1) :: Hash length custom', () => {
    const hash = randomHashHelper(2);
    expect(hash).toHaveLength((defaultHashLength * 2));
  });
});
