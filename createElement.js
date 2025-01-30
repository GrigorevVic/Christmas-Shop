export function createElement(tag, classElement, textContent = "", ...args) {
  const element = document.createElement(tag);
  element.classList.add(classElement);
  element.textContent = textContent;
  if (args.length !== 0) {
    args.map((arg) => {
      const key = Object.keys(arg);
      const value = Object.values(arg);
      element.setAttribute(`${key}`, `${value}`);
    });
  }
  return element;
}
