
import dom from '../__helpers__/dom';
import { $ } from '../../../src/utils/util-dom';
import types from '../../../src/utils/util-types';

dom.add('./test/unit/__templates__/fields.html');

describe('Helpers :: Types', () => {
  test('Test: type.is', () => {
    expect(types.is('string')).toEqual('String');
    expect(types.is({})).toEqual('Object');
    expect(types.is(123)).toEqual('Number');
    expect(types.is(() => {})).toEqual('Function');
    expect(types.is(true)).toEqual('Boolean');
    expect(types.is([])).toEqual('Array');
    expect(types.is($('email')[0])).toEqual('HTMLInputElement');
  });

  test('Test: type.isString', () => {
    expect(types.isString('string')).toBe(true);
  });

  test('Test: type.isObject', () => {
    expect(types.isObject({})).toBe(true);
  });

  test('Test: type.isNumber', () => {
    expect(types.isNumber(123)).toBe(true);
  });

  test('Test: type.isFunction', () => {
    expect(types.isFunction(() => {})).toBe(true);
  });

  test('Test: type.isBoolean', () => {
    expect(types.isBoolean(true)).toBe(true);
  });

  test('Test: type.isArray', () => {
    expect(types.isArray([])).toBe(true);
  });

  test('Test: type.isElement', () => {
    const field = $('email');
    expect(types.isElement(field[0])).toBe(true);
  });
});
