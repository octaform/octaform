import State from '../states';

const ModelActions = {
  getAll(){
    return State.models;
  },
  set({ name, rules = {}, messages = {} }){
    State.models[name] = {
      rules,
      ...(messages && { messages }),
    };
  },
  get(name){
    return State.models[name] || {};
  },
};

export default ModelActions;
