export default {
  SELECTOR: /(\w+:\[.*?\])|(\w+:\(.*?\))|(\w+)/g,
  LIST_RULE: /^(\w+):(\w+)$/g,
  MESSAGE: {
    PARAMS: /\{(.*?)\}/g,
    BRACES: /\{|\}/g,
    ERROR: /#\{(.*?)\}/g,
    LIST: /\.\.\.\{(.*?)\}/g,
  },
};
