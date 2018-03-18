import { ReplaceActions } from './ReplaceActions';
import { MessageActions } from './MessageActions';

export const ErrorActions = {
  reference(type, ...args){
    const error = ReplaceActions.message.error(
      MessageActions.messages.core[type], 
      ...args,
    );
    
    throw new ReferenceError(error);
  },
};
