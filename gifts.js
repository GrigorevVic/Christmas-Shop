import { cardRender } from "./cardRender.js";
import { dataJson } from "./data/data.js";
import { createElement } from "./createElement.js";
import { burgerHandler } from "./burgerHandler.js";

let currentTabId = "all";
let cardCount = 0;

const data = JSON.parse(dataJson);
const cards = document.querySelector(".cards");

const cardsRender = (data) => {
  for (let i = 0; i < data.length / 4; i++) {
    const cardsContainer = createElement("div", "images-container", "");
    for (let i = 0; i < 4; i++) {
      const card = cardRender(data[cardCount]);
      cardsContainer.appendChild(card);
      cardCount++;
    }
    cards.appendChild(cardsContainer);
  }
};

cardsRender(data);

const tabs = document.querySelector(".tabs");
tabs.addEventListener("click", (event) => {
  cardCount = 0;
  const id = event.target.closest(".tab").getAttribute("id");
  if (currentTabId !== id) {
    tabs
      .querySelectorAll(".tab")
      .forEach((el) => el.classList.remove("tab-link-active"));
    event.target.closest(".tab").classList.add("tab-link-active");
    const filtredData = data.filter((el) => id === el.category.toLowerCase());
    cards.innerHTML = "";
    id === "all" ? cardsRender(data) : cardsRender(filtredData);
    currentTabId = id;
  }
});

const buttonUp = document.querySelector(".button-up");

window.addEventListener("scroll", () => {
  window.innerWidth <= 768 && scrollY > 300
    ? (buttonUp.style.display = "block")
    : (buttonUp.style.display = "none");
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 768) {
    buttonUp.style.display = "none";
    menuBurger.classList.remove("burger-active");
    dropDownMenu.classList.remove("show");
    document.body.style.overflow = "";
  }
  if (window.innerWidth <= 768 && scrollY > 300) {
    buttonUp.style.display = "block";
  }
});

buttonUp.addEventListener("click", () => window.scrollTo(scrollY, 0));

const menuBurger = document.querySelector(".menu-burger");
const dropDownMenu = document.querySelector(".drop-down-menu");
const dropDownItems = document.querySelector(".drop-down-items");

burgerHandler(menuBurger, dropDownMenu, dropDownItems);
