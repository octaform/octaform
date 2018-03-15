export const PATTERNS = {
  SELECTOR: /(\w+:\[.*?\])|(\w+:\(.*?\))|(\w+)/g,
  MESSAGE: {
    PARAMS: /\{(.*?)\}/g,
    BRACES: /\{|\}/g,
  },
};
