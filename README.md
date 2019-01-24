<h1 align="center">
  <div align="center">
    <img src="https://avatars2.githubusercontent.com/u/37938941?s=400&u=b7a61cbf6b9686cb78d50258213b256159dbb7af&v=4" height="200" width="200"/>
  </div>
  <div align="center">Octaform - Validate</div>
</h1>

Octaform helps developers validate form in an easy way being completely agnostic to the framework that you're using

## Getting Started

Install using `yarn`:
```
yarn add octaform
```

Or via `npm`:
```
npm install octaform --save
```

## Octaform API

Let's get started import the Octaform, add the validations and create the validation schema
```js
import Octaform from 'octaform';

// The method .add is used to set all validations that will be used by the user schema
Octaform.validator.add(
  // Write or import your validations here as an Array[Object]
);

// Call the validations for all fields specified on the schema below
Octaform.validateAll({ 
  // Write your schema here
})
```

## Validator method: `octaform.validator`
Validator return an object that able you to access all validations that were previously defined in the `.add` method

## Validator method: `octaform.validator.add(Array[Object])`
The method `.add` is used to define the validation that will be used by schema and validate all fields. This method is waiting as parameter an `Array[Object]`. Follow below the example:

Create a file that will be your validation (e.g. `email.validation.js`):

```js
module.exports = {
  name: 'email', // (Required) The name will be used on validation schema
  message: 'Please enter a valid email address', // (Required) User-friendly error message
  fn: (value, element, param) => {
    /**
     * (Required) - Validation function used to validate
     * @param {String} value - Field value
     * @param {HTMLElement} element - DOM element
     * @param {*} param - Get the parameter defined in schema rules (e.g. minlength:3)
     * @return {Boolean} Return true when the field has a valid value and false when is invalid
     */

    // Validation logic here
    const isValid = (true || false);

    return isValid;
  },
};
```

## Validator method: `octaform.validateAll(Schema)`
The method `validateAll` is used to call the validations based on a schema. Check out an example of the schema below:

```js
const Schema = {
  // Field name is defined on the name attribute of input (Required)
  field_name: {
    value: String, // (Optional)
    rules: Object || Array // (Required)
    messages: Object // (Required)
  },
  others...
};
```

### Field name: `(Required)`
The field name is used to search the element on the DOM, you should define the same name specified in the attribute `name`. The key `field_name` should be an `Object || String` as entrypoint

```js
const Schema = {
  // Define your value/rules/messages into field_name object
  field_name: {}
};
```

`OR` 

```js
const Schema = {
  field_name: 'required'
};
```
Note that defining a string, you are able to use only a single validation without any options, it could be helpful to save some lines of code for a single validation

> Don't forget to add the attribute name on your input to recognize the DOM element and apply the validation: 
> e.g. `<input type="text" name="field_name" />`

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
You can define your custom message without using the default validation, for to do it you should define the key `messages` as an `Object` and specify which validation you want to overwrite, follow below the example:

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
Check out the [demo page](https://octaform.github.io/demo) and see the validations working and have fun!

## Changelog
[Check out releases](https://github.com/octaform/octaform/releases)

## License
[The MIT License (MIT)](/LICENSE)

Copyright (c) 2018-2019 Christian Fortes
