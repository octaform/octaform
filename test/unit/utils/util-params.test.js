import utilParams from '../../../src/utils/util-params';

describe('Utils :: ParamsUtils', () => {
  test('Test: shortStringValidation() :: Check value with second param', () => {
    const objRule = utilParams.shortStringValidation('min:3');
    expect(objRule).toEqual({ min: '3' });
  });

  test('Test: shortStringValidation() :: Check single value', () => {
    const objRule = utilParams.shortStringValidation('required');
    expect(objRule).toEqual({ required: true });
  });

  test('Test: shortStringValidation() :: Check undefined value', () => {
    const objRule = utilParams.shortStringValidation();
    expect(objRule).toEqual({ undefined: true });
  });

  test('Test: spreadList() :: Check defined value', () => {
    const msg = 'Please choose a file with a valid extension: (...{})';
    const listParamsSpread = utilParams.spreadList(msg);
    expect(listParamsSpread).not.toBeNull();
  });

  test('Test: spreadList() :: Check undefined value', () => {
    const listParamsSpread = utilParams.spreadList();
    expect(listParamsSpread).toBeNull();
  });

  test('Test: convertType() :: Check paramType as boolean', () => {
    const result = utilParams.convertType({
      paramType: Boolean,
    }, 'true');

    expect(result).toBe(true);
  });

  test('Test: convertType() :: Check paramType not defined', () => {
    const result = utilParams.convertType({}, 'US');
    expect(result).toEqual('US');
  });
});
