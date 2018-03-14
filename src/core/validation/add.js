const add = (name, fn, msg) => {
  if (window.Octaform) {
    window.Octaform.validation[name] = fn;
    window.Octaform.messages[name] = msg;
  }

  return {};
};

export default add;
