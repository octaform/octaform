import Octaform from '../../../src/octaform';
import MESSAGES from '../../../src/constants/messages';
import ReplaceActions from '../../../src/actions/ReplaceActions';

import dom from '../__helpers__/dom';
import utilDom from '../../../src/utils/util-dom';

import require from '../__validations__/require.validate';
import minlength from '../__validations__/minlength.validate';

dom.add('./test/specs/__templates__/fields.html');

Octaform.validator.add([
  require,
  minlength,
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

const messageSchema = (field, messages, rules) => {
  return {
    field,
    messages,
    rules,
  };
};

describe('Validate :: Index', () => {
  const field = utilDom.$('firstName');
  
  test('Test: Shouldn\'t have any validation', () => {
    const validation = Octaform.validate();
    expect(validation).toHaveLength(0);
  });

  test('Test: Should firstName have errors', () => {
    const expectedObject = messageSchema('firstName', [
      'First Name is required',
      'Please enter at least 4 characters',
    ], { 
      required: 'First Name is required',
      minlength: 'Please enter at least 4 characters'
    });

    const validation = Octaform.validate(mockSchema);

    expect(validation).toHaveLength(1);
    expect(validation).toContainEqual(expectedObject);
  });

  test('Test: Should firstName return the default validation', () => {
    const expectedObject = messageSchema('firstName', [
      'This field is required',
      'Please enter at least 4 characters',
    ], { 
      required: 'This field is required',
      minlength: 'Please enter at least 4 characters',
    });

    delete mockSchema.firstName.messages.required;
    const validation = Octaform.validate(mockSchema);

    expect(validation).toHaveLength(1);
    expect(validation).toContainEqual(expectedObject);
  });

  test('Test: Should firstName pass all rules of validation', () => {
    field[0].value = 'João';
    const validation = Octaform.validate(mockSchema);
    expect(validation).toHaveLength(0);
  });

  test('Test: Should firstName use validation directly from string', () => {
    field[0].value = '';
    
    const expectedObject = messageSchema('firstName', [
      'This field is required',
    ], { required: 'This field is required' });

    const validation = Octaform.validate({
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
    ], { 
      required: 'This field is required',
      minlength: 'Please enter at least 3 characters',
    });

    const validation = Octaform.validate({
      firstName: {
        rules: ['required', 'minlength:3'],
      },
    });

    expect(validation).toHaveLength(1);
    expect(validation).toContainEqual(expectedObject);
  });

  test('Test: Shouldn\'t validate any field without rules as object', () => {
    const validation = Octaform.validate({
      firstName: {
        rules: 'required',
      },
    });

    expect(validation).toHaveLength(0);
  });

  test('Test: Should validate a field when ', () => {
    const field = utilDom.$('firstName');
    
    field[0].value = "John Doe";

    const validation = Octaform.validate({
      firstName: {
        ref: field[0],
        rules: {
          required: true
        },
      },
    });

    expect(validation).toHaveLength(0);
  });

  test('Test: Shouldn\'t validate firstName with empty rules', () => {
    const validation = Octaform.validate({ firstName: {} });
    expect(validation).toHaveLength(0);
  });

  test('Test: Should throw an error that field test doesn\'t exists', () => {
    const message = ReplaceActions.message.error(MESSAGES.CORE.field, 'test');

    expect(() => Octaform.validate({ 
      test: 'required',
    })).toThrowError(message);
  });

  test('Test: Should throw invalid entry schema to validate', () => {
    const message = ReplaceActions.message.error(MESSAGES.CORE.entry, 'firstName');

    expect(() => {
      Octaform.validate({
        firstName: [],
      });
    }).toThrowError(message);
  });

  test('Test: Should not validate when have not a validation for the field', () => {
    const validation = Octaform.validate({
      password: null,
    });

    expect(validation).toHaveLength(0);
  });
});
