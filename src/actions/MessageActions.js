import State from '../states';

const MessageActions = {
  getAll() {
    return State.messages;
  },
  set(name, msg) {
    State.messages.validator[name] = msg;
  },
  setCustomFieldMsg(field, userMessages) {
    State.messages.fields = Object.assign(
      State.messages.fields,
      (!!Object.keys(userMessages).length && { [field]: userMessages }),
    );
  },
};

export default MessageActions;
