import { get } from '../../../src/utils/util-object';

describe('Helpers :: get', () => {
  test('Test: .get(obj, \'key\') :: Find key into object', () => {
    const obj = { results: [{ assignedTo: 'João Breu', tasks: [{ number: 'DKG-18267' }] }]}
    const result = get(obj, 'results[0].assignedTo');
    expect(result).toEqual('João Breu');
  });

  test('Test: .get(obj, \'key\') :: Use default parameters when key is not found', () => {
    const obj = {results: []}
    const result = get(obj, 'firstName', 'not found');
    expect(result).toEqual('not found');
  });
});
