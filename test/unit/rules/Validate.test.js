import Octaform from '../../../src';
import MESSAGES from '../../../src/constants/messages';
import ReplaceActions from '../../../src/actions/ReplaceActions';

import dom from '../__helpers/dom';
import domHelper from '../../../src/helpers/dom';

import require from '../_validations/require.validate';
import minlength from '../_validations/minlength.validate';

dom.add('./test/unit/__templates/fields.html');

Octaform.validator.add([
  require,
  minlength
]);

const mockSchema = {
  firstName: {
    rules: {
      required: true,
      minlength: 4,
    },
    messages: {
      required: 'First Name is required',
    },
  },
};

const messageSchema = (field, messages) => {
  return {
    field,
    messages,
  };
};

describe('Validate :: Index', () => {
  const field = domHelper('firstName');
  
  test('Test: Shouldn\'t have any validation', () => {
    const validation = Octaform.validateAll();
    expect(validation).toHaveLength(0);
  });

  test('Test: Should firstName have errors', () => {
    const expectedObject = messageSchema('firstName', [
      'First Name is required',
      'Please enter at least 4 characters',
    ]);

    const validation = Octaform.validateAll(mockSchema);

    expect(validation).toHaveLength(1);
    expect(validation).toContainEqual(expectedObject);
  });

  test('Test: Should firstName return the default validation', () => {
    const expectedObject = messageSchema('firstName', [
      'This field is required',
      'Please enter at least 4 characters',
    ]);

    delete mockSchema.firstName.messages.required;
    const validation = Octaform.validateAll(mockSchema);

    expect(validation).toHaveLength(1);
    expect(validation).toContainEqual(expectedObject);
  });

  test('Test: Should firstName pass all rules of validation', () => {
    field[0].value = 'João';
    const validation = Octaform.validateAll(mockSchema);
    expect(validation).toHaveLength(0);
  });

  test('Test: Should firstName use validation directly from string', () => {
    field[0].value = '';
    
    const expectedObject = messageSchema('firstName', [
      'This field is required',
    ]);

    const validation = Octaform.validateAll({
      firstName: 'required',
    });

    expect(validation).toHaveLength(1);
    expect(validation).toContainEqual(expectedObject);
  });

  test('Test: Should firstName use validation as array list', () => {
    field[0].value = '';

    const expectedObject = messageSchema('firstName', [
      'This field is required',
      'Please enter at least 3 characters',
    ]);

    const validation = Octaform.validateAll({
      firstName: {
        rules: ['required', 'minlength:3'],
      },
    });

    expect(validation).toHaveLength(1);
    expect(validation).toContainEqual(expectedObject);
  });

  test('Test: Shouldn\'t validate any field without rules as object', () => {
    const validation = Octaform.validateAll({
      firstName: {
        rules: 'required',
      },
    });

    expect(validation).toHaveLength(0);
  });

  test('Test: Shouldn\'t validate firstName with empty rules', () => {
    const validation = Octaform.validateAll({ firstName: {} });
    expect(validation).toHaveLength(0);
  });

  test('Test: Should throw an error that field test doesn\'t exists', () => {
    const message = ReplaceActions.message.error(MESSAGES.CORE.field, 'test');

    expect(() => Octaform.validateAll({ 
      test: 'required',
    })).toThrowError(message);
  });

  test('Test: Should throw invalid entry schema to validate', () => {
    const message = ReplaceActions.message.error(MESSAGES.CORE.entry, 'firstName');

    expect(() => {
      Octaform.validateAll({
        firstName: [],
      });
    }).toThrowError(message);
  });
});
