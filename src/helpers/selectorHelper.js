const $ = (selector) => {
  const elemByName = document.getElementsByName(selector);
  const elemByClass = document.getElementsByClassName(selector);
  const elemById = document.getElementById(selector);
  const elemByAll = document.querySelectorAll(selector);

  let element = (
    ((elemByName && elemByName.length) && elemByName) ||
    ((elemByClass && elemByClass.length) && elemByClass) ||
    ((elemById && elemById.length) && elemById) ||
    ((elemByAll && elemByAll.length) && elemByAll)
  ) || [];

  if (element.length){
    element = (
      element.nodeName ? 
        (['SELECT'].includes(element.nodeName) && [element]) : 
        Array.from(element)
    );
  }

  return element;
};

export default $;
