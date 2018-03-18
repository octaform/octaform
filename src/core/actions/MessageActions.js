import State from '../states';
import MESSAGES from '../constants/messages';

const MessageActions = {
  getAll() {
    return State.messages;
  },
  set(name, msg) {
    State.messages[name] = msg;
  },
  setDictionary(field, userMessages) {
    const fields = Object.assign(
      State.messages.fields,
      (userMessages && { [field]: userMessages }),
    );

    State.messages = Object.assign(
      State.messages,
      { fields },
      { core: MESSAGES.CORE },
    );
  },
};

export default MessageActions;
