const $ = (selector) => {
  const element = Array.from((
    document.getElementsByName(selector) ||
    document.getElementsByClassName(selector) ||
    document.getElementById(selector) ||
    document.querySelectorAll(selector)
  ) || []);

  return element;
};

export default $;
