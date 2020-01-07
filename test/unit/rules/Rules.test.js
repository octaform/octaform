import Rules from '../../../src/rules/Rules';
import MessageActions from '../../../src/actions/MessageActions';
import ReplaceActions from '../../../src/actions/ReplaceActions';

import require from '../__validations__/require.validate';
import minlength from '../__validations__/minlength.validate';

import Octaform from '../../../src/octaform';

import dom from '../__helpers__/dom';
import utilDom from '../../../src/utils/util-dom';

dom.add('./test/unit/__templates__/fields.html');

const ExpectedMock = {
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
  element: utilDom.$('firstName'),
  value: '',
};

Octaform.validator.add([
  require,
  minlength
]);

describe('Rules :: Rules', () => {
  test('Test: Should field be invalid', () => {
    const { rules, messages } = MockToApply;

    const minLengthMSG = ReplaceActions.message.validation(
      messages.validator.minlength,
      rules.minlength,
    );

    ExpectedMock.messages.push(
      messages.validator.required,
      minLengthMSG,
    );

    ExpectedMock.rules = {
      minlength: 'Please enter at least 4 characters', 
      required: 'This field is required'
    }

    const isValid = Rules.apply(MockToApply, Octaform.validator);
    expect(isValid).toEqual(ExpectedMock);
  });

  test('Test: Shouldn\'t be a valid parameter based on paramType', () => {
    MockToApply.rules.required = {};

    const errorMSG = ReplaceActions.message.error(
      MockToApply.messages.core.paramType,
      {
        fieldName: MockToApply.selector,
        validation: 'required',
        paramType: Octaform.validator.required.paramType.name,
      }
    );

    expect(() => {
      Rules.apply(MockToApply, Octaform.validator);
    }).toThrow(errorMSG);
  });

  test('Test: Should value of field be valid', () => {
    MockToApply.rules.required = true;
    MockToApply.value = 'abcd';
    ExpectedMock.messages = [];
    ExpectedMock.rules = {};

    const isValid = Rules.apply(MockToApply, Octaform.validator);
    expect(isValid).toEqual(ExpectedMock);
  });

  test('Test: Should not have the validation to required', () => {
    const { messages } = MockToApply;
    delete Octaform.validator.required;
    const errorMSG = ReplaceActions.message.error(
      messages.core.undefined,
      'required',
    );

    expect(() => {
      Rules.apply(MockToApply, Octaform.validator);
    }).toThrow(errorMSG);
  });

  test('Test: Should receive empty field', () => {
    const isValid = Rules.apply(undefined, Octaform.validator);
    expect(isValid).toEqual({ 
      field: '',
      messages: [],
      rules: {},
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

  test('Test: Shouldn\'t validate when field has not value', () => {
    const { messages, rules } = MockToApply;

    MockToApply.value = '123';

    ExpectedMock.messages.push(
      ReplaceActions.message.validation(
        messages.validator.minlength,
        rules.minlength,
      ),
    );

    delete rules.required;
    const isValid = Rules.apply(MockToApply, Octaform.validator);
    expect(isValid.messages).toHaveLength(1);
    expect(isValid.messages[0]).toEqual(ExpectedMock.messages[0]);
  });

  test('Test: Should rules be empty', () => {
    MockToApply.rules = null;
    ExpectedMock.messages = [];

    const isValid = Rules.apply(MockToApply, Octaform.validator);
    expect(isValid).toEqual(ExpectedMock);
  });

  test('Test: Should not have a validation that was defined', () => {
    MockToApply.rules = {
      invalidValidation: true,
    };

    const errorMSG = ReplaceActions.message.error(
      MockToApply.messages.core.undefined,
      'invalidValidation',
    );

    expect(() => {
      Rules.apply(MockToApply, Octaform.validator);
    }).toThrow(errorMSG);
  });
});
