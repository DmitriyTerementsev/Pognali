const openBusiness = document.querySelector(".tariff__business");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__button");
const openBlocks = document.querySelector(".registration__title");
const registration = document.querySelector(".registration__container");
const adress = document.querySelector(".adress");
const map = document.querySelector(".map");
const footer = document.querySelector(".footer");
const headerBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".header__burger_light");
const burgerMenu = document.querySelector(".burger__menu");
const closeButton = document.querySelector(".close__icon");
const headerCloseButton = document.querySelector(".close__icon_light");
const about = document.querySelectorAll(".header__link_burger");
const topBurger = document.querySelector(".header__burger_top");

topBurger.addEventListener("click", () => {
  lightHeader.classList.add("background_active");
  burgerMenu.classList.remove("inactive");
  burgerMenu.classList.add("active");
  headerCloseButton.style.display = "block";
  burger.style.display = "none";
  burger.style;
});

about.forEach((item) => {
  item.addEventListener("click", () => {
    burgerMenu.classList.add("inactive");
    burgerMenu.classList.remove("active");
    headerCloseButton.style.display = "none";
    burger.style.display = "block";
  });
});

burger.addEventListener("click", () => {
  burgerMenu.classList.remove("inactive");
  burgerMenu.classList.add("active");
  headerCloseButton.style.display = "block";
  burger.style.display = "none";
});

headerCloseButton.addEventListener("click", () => {
  burgerMenu.classList.add("inactive");
  burgerMenu.classList.remove("active");
  headerCloseButton.style.display = "none";
  burger.style.display = "block";
});

closeButton.addEventListener("click", () => {
  burgerMenu.classList.add("inactive");
  burgerMenu.classList.remove("active");
  closeButton.style.display = "none";
  headerBurger.style.display = "block";
});

function toggleBurger() {}

document.addEventListener("keydown", keyHandler);

openBusiness.addEventListener("click", () => {
  togglePopup();
});

popupClose.addEventListener("click", () => {
  togglePopup();
});

function togglePopup() {
  popup.classList.toggle("popup_active");
}

function keyHandler(evt) {
  if (evt.key === "Escape") {
    popup.classList.remove("popup_active");
  }
}

openBlocks.addEventListener("click", () => {
  setTimeout(() => {
    registration.classList.add("active");
    registration.classList.remove("inactive");
  }, 500);
  setTimeout(() => {
    adress.classList.add("active");
    adress.classList.remove("inactive");
  }, 1000);
  setTimeout(() => {
    map.classList.add("active");
    map.classList.remove("inactive");
  }, 2000);
  setTimeout(() => {
    footer.classList.add("active");
    footer.classList.remove("inactive");
  }, 3000);
});

const lightHeader = document.querySelector(".background");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    lightHeader.classList.add("background_active");
  } else {
    if (window.scrollY < 400) {
      lightHeader.classList.remove("background_active");
    } else if (window.screen.width >= 1440) {
      document.querySelector(".header__burger_light").style.display = "none";
    }
  }
});
