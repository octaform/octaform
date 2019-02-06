export default {
  name: 'required',
  message: 'This field is required',
  fn: (value, element) => {
    if (element.length > 1) {
      return element.some(elem => elem.checked);
    }
    return (!!value.length || false);
  },
};
