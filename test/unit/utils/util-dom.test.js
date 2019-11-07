
import dom from '../__helpers__/dom';
import { $ } from '../../../src/utils/util-dom';

dom.add('./test/unit/__templates__/fields.html');

describe('Helpers :: DomHelper', () => {
  test('Test: .dom(selector) :: Find element by name', () => {
    const field = $('email');
    expect(field).toHaveLength(1);
  });

  test('Test: .dom(selector) :: Find element by class', () => {
    const field = $('firstName');
    expect(field).toHaveLength(1);
  });

  test('Test: .dom(selector) :: Find element by id', () => {
    const field = $('lastName');
    expect(field).toHaveLength(1);
  });
  
  test('Test: .dom(selector) :: Find element by whatever', () => {
    const field = $("[data-type='date']");
    expect(field).toHaveLength(1);
  });

  test('Test: .dom(selector) :: Element not found', () => {
    const field = $('notFound');
    expect(field).toHaveLength(0);
  });
});
