export const burgerHandler = (menuBurger, dropDownMenu, dropDownItems) => {
  menuBurger.addEventListener("click", (e) => {
    const isActive = menuBurger.classList.toggle("burger-active");
    dropDownMenu.classList.toggle("show");
    document.body.style.overflow = isActive ? "hidden" : "";
  });

  dropDownItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("action-large")) {
      menuBurger.classList.toggle("burger-active");
      dropDownMenu.classList.toggle("show");
      document.body.style.overflow = "";
    }
  });
};
