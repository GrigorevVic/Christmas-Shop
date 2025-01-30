import { cardRender } from "./cardRender.js";
import { dataJson } from "./data/data.js";
import { getTimeToNewYear, getRandomNumber } from "./utils/utils.js";
import { burgerHandler } from "./burgerHandler.js";

const data = JSON.parse(dataJson);
const cardsContainer = document.querySelector(".images-container");
for (let i = 0; i < 4; i++) {
  const card = cardRender(data[getRandomNumber(0, 35)]);
  cardsContainer.appendChild(card);
}

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

setInterval(() => {
  const { days, hours, minutes, seconds } = getTimeToNewYear();
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}, 1000);

const slider = document.querySelector(".slider");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

const sliderWidth = 1993;
let clickCount = 0;

const calculatewidthScreen = () => {
  const widthScreen = window.innerWidth;
  let vw = widthScreen > 1440 ? 1440 : widthScreen;
  const clicksNumber = widthScreen >= 768 ? 3 : 6;
  const correction = widthScreen >= 768 ? 35 : 5;
  let offset = ((sliderWidth - vw) / clicksNumber) + correction;
  let offsetSize = widthScreen >= 768 ? 0 : 0;
  return { offset, offsetSize, clicksNumber };
};

let offset = calculatewidthScreen().offset;
let offsetSize = calculatewidthScreen().offsetSize;
let clicksNumber = calculatewidthScreen().clicksNumber;

rightArrow.addEventListener("click", (e) => {
  if (rightArrow.classList.contains("active-arrow")) {
    clickCount++;
    if (clickCount === clicksNumber) {
      rightArrow.classList.remove("active-arrow");
    }
    if (clickCount !== 0) {
      leftArrow.classList.add("active-arrow");
    }
    offsetSize -= offset;
    slider.style.setProperty("--offset", `${offsetSize}px`);
  }
});

leftArrow.addEventListener("click", (e) => {
  if (leftArrow.classList.contains("active-arrow")) {
    clickCount--;
    if (clickCount === 0) {
      leftArrow.classList.remove("active-arrow");
    }
    if (clickCount !== clicksNumber) {
      rightArrow.classList.add("active-arrow");
    }
    offsetSize += offset;
    slider.style.setProperty("--offset", `${offsetSize}px`);
  }
});

const menuBurger = document.querySelector(".menu-burger");
const dropDownMenu = document.querySelector(".drop-down-menu");
const dropDownItems = document.querySelector(".drop-down-items");

burgerHandler(menuBurger, dropDownMenu, dropDownItems);

window.addEventListener("resize", (e) => {
  slider.style.setProperty("--offset", `0px`);
  leftArrow.classList.remove("active-arrow");
  rightArrow.classList.add("active-arrow");
  clickCount = 0;
  offset = calculatewidthScreen().offset;
  offsetSize = calculatewidthScreen().offsetSize;
  clicksNumber = calculatewidthScreen().clicksNumber;
  if (window.innerWidth > 768) {
    menuBurger.classList.remove("burger-active");
    dropDownMenu.classList.remove("show");
    document.body.style.overflow = "";
  }
});
