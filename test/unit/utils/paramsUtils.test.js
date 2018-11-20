import paramsUtils from '../../../src/utils/paramsUtils';

describe('Utils :: ParamsUtils', () => {
  test('Test: get.shortStringValidation() :: Check value with second param', () => {
    const objRule = paramsUtils.get.shortStringValidation('min:3');
    expect(objRule).toEqual({ min: '3' });
  });

  test('Test: get.shortStringValidation() :: Check single value', () => {
    const objRule = paramsUtils.get.shortStringValidation('required');
    expect(objRule).toEqual({ required: true });
  });

  test('Test: get.spreadList() :: Check defined value', () => {
    const msg = 'Please choose a file with a valid extension: (...{})';
    const listParamsSpread = paramsUtils.get.spreadList(msg);
    expect(listParamsSpread).not.toBeNull();
  });
});
