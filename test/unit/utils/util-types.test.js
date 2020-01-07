
import dom from '../__helpers__/dom';
import utilDom from '../../../src/utils/util-dom';
import utilTypes from '../../../src/utils/util-types';

dom.add('./test/unit/__templates__/fields.html');

describe('Helpers :: Types', () => {
  test('Test: type.is', () => {
    expect(utilTypes.is('string')).toEqual('String');
    expect(utilTypes.is({})).toEqual('Object');
    expect(utilTypes.is(123)).toEqual('Number');
    expect(utilTypes.is(() => {})).toEqual('Function');
    expect(utilTypes.is(true)).toEqual('Boolean');
    expect(utilTypes.is([])).toEqual('Array');
    expect(utilTypes.is(utilDom.$('email')[0])).toEqual('HTMLInputElement');
  });

  test('Test: type.isString', () => {
    expect(utilTypes.isString('string')).toBe(true);
  });

  test('Test: type.isObject', () => {
    expect(utilTypes.isObject({})).toBe(true);
  });

  test('Test: type.isNumber', () => {
    expect(utilTypes.isNumber(123)).toBe(true);
  });

  test('Test: type.isFunction', () => {
    expect(utilTypes.isFunction(() => {})).toBe(true);
  });

  test('Test: type.isBoolean', () => {
    expect(utilTypes.isBoolean(true)).toBe(true);
  });

  test('Test: type.isArray', () => {
    expect(utilTypes.isArray([])).toBe(true);
  });

  test('Test: type.isElement', () => {
    const field = utilDom.$('email');
    expect(utilTypes.isElement(field[0])).toBe(true);
  });
});
