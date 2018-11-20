const dom = (selector) => {
  const elemByName = document.getElementsByName(selector);
  const elemByClass = document.getElementsByClassName(selector);
  const elemById = document.getElementById(selector);
  const elemByAll = document.querySelectorAll(selector);
  
  const element = (
    ((elemByName && elemByName.length) && elemByName) ||
    ((elemByClass && elemByClass.length) && elemByClass) ||
    (elemById && [elemById]) ||
    ((elemByAll && elemByAll.length) && elemByAll)
  ) || [];
  
  return Array.from(element);
};

export default dom;
