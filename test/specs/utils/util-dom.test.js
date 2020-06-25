
import dom from '../__helpers__/dom';
import utilDom from '../../../src/utils/util-dom';

dom.add('./test/specs/__templates__/fields.html');

describe('Helpers :: DomHelper', () => {
  test('Test: .dom(selector) :: Find element by name', () => {
    const field = utilDom.$('email');
    expect(field).toHaveLength(1);
  });

  test('Test: .dom(selector) :: Find element by class', () => {
    const field = utilDom.$('firstName');
    expect(field).toHaveLength(1);
  });

  test('Test: .dom(selector) :: Find element by id', () => {
    const field = utilDom.$('lastName');
    expect(field).toHaveLength(1);
  });
  
  test('Test: .dom(selector) :: Find element by whatever', () => {
    const field = utilDom.$("[data-type='date']");
    expect(field).toHaveLength(1);
  });

  test('Test: .dom(selector) :: Element not found', () => {
    const field = utilDom.$('notFound');
    expect(field).toHaveLength(0);
  });
});
