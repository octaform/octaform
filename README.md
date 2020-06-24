<h1 align="center">
  <div align="center">
    <img src="https://avatars2.githubusercontent.com/u/37938941?s=400&u=b7a61cbf6b9686cb78d50258213b256159dbb7af&v=4" height="200" width="200"/>
  </div>
  <div align="center">Octaform - Validate</div>
</h1>

Octaform help developers to validate all forms in a simple way being completely agnostic to the framework that you're using

## Getting Started

Installation
```
yarn add octaform

// or

npm install octaform --save
```

## Octaform API

Let's get started importing the Octaform core and add the validations that the project will use, and the last step will be you write your schema that is the map of all fields that will be validated
```js
import Octaform from 'octaform';

// The method .add is used to set all validations that will be used by the user schema
Octaform.validator.add(
  // Write or import your validations here as an Array[Object]
);

// Call the validations for all fields specified on the schema below
Octaform.validate({ 
  // Write your schema here
})
```

## `Octaform.validator`
Validator returns an object where you can access all validations previously defined in the `.add` method

## `Octaform.validator.add()`
The `.add` is used to define the validation that is used by the schema. This method awaits a parameter as `Array[Object]` or `Object`. Follow the example below:

Create a validation file `(e.g. email.validation.js)`:

```js
export default {
  // (Required) The name will be used on validation schema
  name: 'email', 
  // (Required) User-friendly error message
  message: 'Please enter a valid email address', 
  // Parameter validator accept JS types (e.g. String/Boolean/Function/...)
  paramType: String,
  /**
   * fn (Required): Validation function that is used to validate
   * @param {string} value - Field value
   * @param {HTMLElement} element - DOM element
   * @param {*} param - Get the parameter defined in schema rules (e.g. minlength:3)
   * 
   * @return {boolean} Return true when the field has a valid value and false when is invalid
   */
  fn: (value, element, param) => {
    // Validation logic goes here and must return a boolean value
    
    return (true || false);
  },
};
```

## `Octaform.validate(Schema)`
The method `validate` is used to call the validation based in a schema. Check out an schema example:

```js
const Schema = {
  // Field name is defined on the name attribute of input (Required)
  field_name: {
    ref: HTMLElement, // (Optional)
    value: String, // (Optional)
    rules: Object || Array // (Required)
    messages: Object // (Required)
  },
  others...
};
```

### Field name: `(Required)`
The field name is a required property it is used to get the input details from the HTML, you must define a `name` attribute on your HTML field or if you are using other platform like react native you can define an attribute called `ref` instead and pass directly the html element. When using `name` attribute you are able to set you rules as an `Object` or a single validation using `String` instead.

```js
const Schema = {
  field_name: {
    ref: HTMLElement // Optional
    value: "field value" // Optional,
    rules: {} // Required
    messages: {} // optional
  }

  // OR

  field_name: "required"
};
```

> (Web Only) - Set the attribute name to recognize the DOM element and apply the validation:
> e.g. `<input type="text" name="field_name" />`

### Ref: `(Optional)`
Ref is used to get the input details through the HTML, it is used when you are validating in another platform like react native when the DOM is not present. The input will be your HTML element.

```js
const Schema = {
  firstName: {
    ref: HTMLElement
  }
};
```

### Value: `(Optional)`
You can add a key to define your custom value and validate without search in the DOM,
it's helpful when you are using a library such as React/Angular/Vue/etc...

```js
const Schema = {
  firstName: {
    value: 'My field value'
  }
};
```

### Rules: `(Required)`
The `rules` is composed by `key: value`, the `key` is the validation rule that will be used, the key name is defined by the method [.add](#validator-method-octaformvalidatoraddarrayobject) that was defined previously, and `value` is a parameter that could be accessible by your validation method. The `rules` should be an `Object || Array` follow below the example:

```js
const Schema = {
  firstName: {
    rules: {
      required: true
    }
  }
};
```

`OR`

```js
const Schema = {
  firstName: {
    rules: ['required', 'minlength:3']
    // minlength is the validation name and the number 3 is a parameter
  }
};
```

### Messages: `(Optional)`
Can be defined a custom message without using default validation, for it you should define a key `messages` as an `Object` and specify which validation you want to overwrite, follow the example below:

```js
const Schema = {
  firstName: {
    messages: {
      required: 'My custom message to required validation'
    }
  }
};
```

## Additional validations

Follow this repository and use our preset validation [https://github.com/octaform/octaform-additional](https://github.com/octaform/octaform-additional), or create your own validation using the [Octaform API](#octaform-api)

## Demo
Check out the [demo page](https://octaform.github.io) and see the validations working and have fun!

## License
[Octaform is MIT licensed](/LICENSE)
