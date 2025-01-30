import { createElement } from "./createElement.js";

const body = document.querySelector("body");

export const modalWindowRender = (data, className) => {
  const modalWrapper = createElement("div", "modal-wrapper", "");
  body.prepend(modalWrapper);
  body.style.overflow = "hidden";
  const modalContainer = createElement("div", "modal-container", "");
  const imgContainer = createElement("div", "modal-image-container", "");
  const img = createElement(
    "img",
    "gift-1",
    "",
    { src: `./img/gift-${className}.png` },
    { alt: data.category }
  );
  const cross = createElement("div", "cross");
  const line1 = createElement("span", "line");
  const line2 = createElement("span", "line");
  cross.append(line1, line2);
  imgContainer.append(img, cross);
  const descriptionContainer = createElement("div", "modal-description");
  const tittle = createElement("p", "header-4", data.category);
  tittle.classList.add(className);
  const name = createElement("p", "header-3", data.name);
  name.classList.add("card-description");
  name.classList.add("modal-card-description");
  const description = createElement("p", "paragraph", data.description);
  const powersTitle = createElement("p", "header-4", "Adds superpowers to:");
  powersTitle.classList.add("powers-title");
  descriptionContainer.append(
    tittle,
    name,
    description,
    powersTitle,
    renderBlockSuperPowers(data)
  );
  modalContainer.append(imgContainer, descriptionContainer);
  modalWrapper.append(modalContainer);

  modalWrapper.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal-wrapper") ||
      e.target.classList.contains("cross") ||
      e.target.classList.contains("line")
    ) {
      modalWrapper.remove();
      body.style.overflow = "";
    }
  });
};

const renderBlockSuperPowers = (data) => {
  const powersContainer = createElement("div", "powers-container");
  const leftContainer = createElement("div", "left-powers-container");
  const rightContainer = createElement("div", "right-powers-container");
  powersContainer.append(leftContainer, rightContainer);

  Object.keys(data.superpowers).forEach((power) => {
    const newPower = `${power[0].toUpperCase()}${power.slice(1)}`;
    const powerElement = createElement("p", "paragraph", newPower);
    leftContainer.append(powerElement);
    const blockStars = createElement("div", "stars-block");
    const number = createElement("p", "paragraph", data.superpowers[power]);
    number.classList.add('count-power');
    blockStars.append(number);
    for (let i = 0; i < 5; i++) {
      const powerNumber = Number(data.superpowers[power].slice(1)) / 100;
      let path;
      powerNumber >= i + 1
        ? (path = "./img/logo.svg")
        : (path = "./img/star-20.svg");

      const star = createElement(
        "img",
        "star",
        "",
        { src: path },
        { alt: "star" }
      );
      blockStars.append(star);
    }
    rightContainer.append(blockStars);
  });
  return powersContainer;
};
