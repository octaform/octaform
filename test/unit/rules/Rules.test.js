import Rules from '../../../src/rules/Rules';
import MessageActions from '../../../src/actions/MessageActions';
import ReplaceActions from '../../../src/actions/ReplaceActions';
import Additionais from '../../../../octaform-additional/src';
import Octaform from '../../../src';

import dom from '../__helpers/dom';
import domHelper from '../../../src/helpers/domHelper';

dom.add('./test/unit/__templates/fields.html');

// Retorno
const MockToResult = {
  field: 'firstName',
  messages: [],
};

const MockToApply = {
  rules: { 
    required: true, 
    minlength: 4,
  },
  messages: MessageActions.getAll(),
  selector: 'firstName',
  element: domHelper('firstName'),
  value: '',
};

const octaform = new Octaform();
octaform.validator.add(Additionais);

describe('Rules :: Rules', () => {
  test('Test: Should field be invalid', () => {
    const { rules, messages } = MockToApply;

    const minLengthMSG = ReplaceActions.message.validation(
      messages.validator.minlength,
      rules.minlength,
    );

    MockToResult.messages.push(
      messages.validator.required,
      minLengthMSG,
    );

    const isValid = Rules.apply(MockToApply, octaform.validator);
    expect(isValid).toEqual(MockToResult);
  });

  test('Test: Should value of field be valid', () => {
    MockToApply.value = 'abcd';
    MockToResult.messages = [];

    const isValid = Rules.apply(MockToApply, octaform.validator);
    expect(isValid).toEqual(MockToResult);
  });

  test('Test: Should not have the validation to required', () => {
    const { messages } = MockToApply;
    delete octaform.validator.required;
    const errorMSG = ReplaceActions.message.error(
      messages.core.undefined,
      'required',
    );

    expect(() => {
      Rules.apply(MockToApply, octaform.validator);
    }).toThrow(errorMSG);
  });

  test('Test: Should receive empty field', () => {
    const isValid = Rules.apply(undefined, octaform.validator);
    expect(isValid).toEqual({ 
      field: '', 
      messages: [],
    });
  });

  test('Test: Should receive empty validator', () => {
    const { messages } = MockToApply;
    const errorMSG = ReplaceActions.message.error(
      messages.core.undefined,
      'required',
    );
    
    expect(() => {
      Rules.apply(MockToApply, undefined);
    }).toThrow(errorMSG);
  });

  test('Test: Should rules be empty', () => {
    MockToApply.rules = undefined;
    const isValid = Rules.apply(MockToApply, octaform.validator);
    expect(isValid).toEqual(MockToResult);
  });
});
