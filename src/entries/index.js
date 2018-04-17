import StringEntry from './StringEntry';
import ObjectEntry from './ObjectEntry';
import ArrayEntry from './ArrayEntry';

export const entryType = {
  field: {
    object: ObjectEntry,
    string: StringEntry,
  },
  rules: {
    array: ArrayEntry,
  },
};
