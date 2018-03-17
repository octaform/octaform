import { Replace } from './replace';

export const Errors = {
  messages: {
    msg: '{method} has not been defined a validation message',
    field: 'field {selector} was not found',
    addMethod: 'Method .add accept as parameters [String(Name), Function(Validation), String(Message)]',
  },
  reference(type, ...args){
    const error = Replace.message.error(this.messages[type], ...args);
    throw new ReferenceError(error);
  },
};
