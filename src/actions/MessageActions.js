import State from '../states';

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
    );
  },
};

export default MessageActions;
