import ReplaceActions from './ReplaceActions';
import MessageActions from './MessageActions';

const ErrorActions = {
  set(type, ...args){
    const messages = MessageActions.getAll();
    console.log(messages);
    const error = ReplaceActions.message.error(
      messages.core[type],
      ...args,
    );
    
    throw new Error(error);
  },
};

export default ErrorActions;
