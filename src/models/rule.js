export default {
  get({ ref, rules = {}, messages = {}, value }) {
    return {
      ...(ref && { ref }),
      ...(rules && { rules }),
      ...(messages && { messages }),
      ...(value && { value }),
    };
  },
};
