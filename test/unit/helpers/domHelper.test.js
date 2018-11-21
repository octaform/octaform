
import dom from '../__helpers/dom';
import domHelper from '../../../src/helpers/dom';

dom.add('./test/unit/__templates/fields.html');

describe('Helpers :: DomHelper', () => {
  test('Test: .dom(selector) :: Find element by name', () => {
    const field = domHelper('email');
    expect(field).toHaveLength(1);
  });

  test('Test: .dom(selector) :: Find element by class', () => {
    const field = domHelper('firstName');
    expect(field).toHaveLength(1);
  });

  test('Test: .dom(selector) :: Find element by id', () => {
    const field = domHelper('lastName');
    expect(field).toHaveLength(1);
  });
  
  test('Test: .dom(selector) :: Find element by whatever', () => {
    const field = domHelper("[data-type='date']");
    expect(field).toHaveLength(1);
  });

  test('Test: .dom(selector) :: Element not found', () => {
    const field = domHelper('notFound');
    expect(field).toHaveLength(0);
  });
});
