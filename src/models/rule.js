export default {
  get({ rules = {}, messages = {}, value }) {
    return {
      ...(rules && { rules }),
      ...(messages && { messages }),
      ...(value && { value }),
    };
  },
};
