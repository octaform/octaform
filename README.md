<h1 align="center">
  <div align="center">
    <img src="https://avatars2.githubusercontent.com/u/37938941?s=400&u=b7a61cbf6b9686cb78d50258213b256159dbb7af&v=4" height="200" width="200"/>
  </div>
  <div align="center">Octaform - Validate</div>
</h1>

Octaform helps developers validate forms in an easy way, being completely agnostic to framework, you can use anywhere you want.

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

Let's get started importing the octaform, adding validations and creating the validation schema
```js
import Octaform from 'octaform';

// Instantiate the Octaform to access the methods
const octaform = new Octaform();

octaform.validator.add([
  // Add all validations that you will use here as an object
]);

// Call all validations that is defined into Schema
octaform.validateAll({ 
  /* Define your schema of validations */ 
})
```

## Validator method: `octaform.validator`
You are able to access all your validations that were defined in the `.add` method

## Validator method: `octaform.validator.add()`

The method `.add` is used to define your validation to the schema and validate your field, should be used as an `Array of Objects`. Follow below the example of an `Object` that should be define into `Array`

Create a file with your validation e.g. `(test.js)`:

```js
module.exports = {
  name: 'validation_name', // The name will be used to define in the schema object
  message: 'Validation Message', // Will show this message to user
  fn: (value, element, param) => {
    /** 
     * (value): Field value
     * (element): DOM element
     * (param): Defined on schema to validate, like: minlength:3
    **/

    // Write your logic here

    return `Return a boolean value (true|false)`;
  },
};
```

## Validator method: `octaform.validateAll(Schema)`

The method `validateAll` is used to call the validations based on an object that is defined the rules and will be applied to the fields

## Validation Schema

Schema is composed by an object 

```js
const Schema = {
  // field_name: is the name declared in the attribute name on your input
  field_name: {
    value: String, // (Optional)
    rules: Object || Array
    messages: Object
  },
  others...
};
```

### Field name: `(Required)`
The field name is used to search the field into DOM, you should define the same name specified in the name attribute. The field name accept an `Object` or `String`

```js
const Schema = {
  field_name: {
    // Define your value/rules/messages here
  }
};
```

`OR` 

```js
const Schema = {
  field_name: 'required'
};
```
Note that defining as string, you are able to use only a single validation without any more options, this could be helpful if you dont need any more options and want to define a single validation, will save some lines of code

### Value: `(Optional)`
You can add a key to define your custom value and validate without using the value of DOM element, sometimes it's helpful when use some library such as React/Angular/Vue/etc...

```js
const Schema = {
  firstName: {
    value: 'My field value'
  }
};
```

### Rules: `(Required)`
The `rules` is composed of two things one being the validation name `(required)` and the other is the parameter `(true)`, that could be accessible by your validation function. `Rules` require a pattern as an `Object` or `Array`, follow below the example:

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
    // minlength is the validation name and 3 is your parameter
  }
};
```

### Messages: `(Optional)`
You can define your custom message without use from default validation, to do it you should define the key `messages` as an `Object` and specify which validation you wanna overwrite:

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

Follow this repository and use our pre-defined validations [here](https://github.com/octaform/octaform-additional), or create your own validations using the Octaform API above

## Demo
See the validations working on our demo page: https://octaform.github.io/demo

## Changelog

[Check out releases](https://github.com/octaform/octaform/releases)

## License

[The MIT License (MIT)](/LICENSE)

Copyright (c) 2018 Christian Fortes
