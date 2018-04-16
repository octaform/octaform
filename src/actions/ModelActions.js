import State from '../states';

const ModelActions = {
  getAll(){
    return State.models;
  },
  deleteAll() {
    State.models = {};
  },
  set({ name, rules = {}, messages = {}, value }){
    State.models[name] = {
      rules,
      messages,
      ...(value && { value }),
    };
  },
  get(name){
    return State.models[name] || {};
  },
};

export default ModelActions;
