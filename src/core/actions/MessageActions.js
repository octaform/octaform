import State from '../states';
import { MESSAGES } from '../constants';

export const MessageActions = {
  getAll() {
    return State.messages;
  },
  set(name, msg) {
    State.messages[name] = msg;
  },
  setDictionary(field, userMessages = {}) {
    const fields = Object.assign(
      State.messages.fields,
      { [field]: userMessages },
    );

    State.messages = Object.assign(
      State.messages,
      { fields },
      { core: MESSAGES.CORE },
    );
  },
};
