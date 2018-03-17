export default {
  messages: {},
  getAll(){
    return this.messages;
  },
  set(name, msg){
    this.messages[name] = msg;
  },
  setDictionary(objMessages){
    this.messages = Object.assign(
      this.messages,
      objMessages || {},
    );
  },
};
