import { createElement } from "./createElement.js";
import { modalWindowRender } from "./modalWindowRender.js";

export const cardRender = (data) => {
  const className = data.category.toLowerCase().split(" ").join("-");
  const div = createElement("div", "image-container", "", { id: data.name });
  const img = createElement(
    "img",
    "gift-1",
    "",
    { src: `./img/gift-${className}.png` },
    { alt: data.category }
  );
  const descriptionContainer = createElement("div", "description-container");
  const tittle = createElement("p", "header-4", data.category);
  tittle.classList.add(className);
  const name = createElement("p", "header-3", data.name);
  name.classList.add("card-description");
  descriptionContainer.append(tittle, name);
  div.append(img, descriptionContainer);
  div.addEventListener("click", () => modalWindowRender(data, className));
  return div;
};
