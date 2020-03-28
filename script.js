"use strict";

const Page = {
    HUMBURGER: document.querySelector(".header__humburger"),
    NAVIGATION: document.querySelector(".header__navigation"),
    LINKS: document.querySelectorAll(".header__link"),
    SECTIONS: document.querySelectorAll("section"),
    ARROWS: document.querySelectorAll(".welcome__arrow"),
    RADIO_BUTTONS: document.querySelectorAll(".portfolio__radio-label"),
    BUTTON_PHONE_VERTICAL: document.querySelector(
      ".welcome__phone-button-vertical"
    ),
    BUTTON_PHONE_HORIZONTAL: document.querySelector(
      ".welcome__phone-button-horisontal"
    ),
    PORTFOLIO_IMAGES_ITEMS: Array.from(
      document.querySelectorAll(".portfolio__images-item")
    ),
    PORTFOLIO_IMAGES_LIST: document.querySelector(".portfolio__images-list"),
    PORTFOLIO_IMAGES: Array.from(
      document.querySelectorAll(".portfolio__image")
    ),
    FORM: document.querySelector(".form"),
    FORM_BUTTON: document.querySelector(".form__button"),
    FORM_SUBJECT: document.querySelector(".form__input-subject"),
    FORM_TEXTAREA: document.querySelector(".form__textarea")
  },
  fragment = document.createDocumentFragment();

document.addEventListener("scroll", onScroll);

function onScroll() {
  let curPos = window.scrollY;

  Page.SECTIONS.forEach(element => {
    if (
      element.offsetTop <= curPos + element.offsetHeight * 0.3 &&
      element.offsetTop + element.offsetHeight > curPos
    ) {
      Page.LINKS.forEach(a => {
        a.classList.remove("header__link--active");
        if (
          element.getAttribute("id") === a.getAttribute("href").substring(1)
        ) {
          a.classList.add("header__link--active");
        }
      });
    }
  });
}

function toggleLinkActive() {
  Page.LINKS.forEach(element => {
    element.classList.remove("header__link--active");
    this.classList.add("header__link--active");
    Page.NAVIGATION.classList.remove("show-nav");
    Page.HUMBURGER.classList.remove("header__humburger--rotate");
  });
}

Page.LINKS.forEach(element => {
  element.addEventListener("click", toggleLinkActive);
});

function changeSlide() {
  document
    .querySelector(".welcome__slide")
    .classList.toggle("visibility-hidden");
}

Page.ARROWS.forEach(element => {
  element.addEventListener("click", changeSlide);
});

function onHumburgerClick() {
  Page.NAVIGATION.classList.toggle("show-nav");
  Page.HUMBURGER.classList.toggle("header__humburger--rotate");
}

Page.HUMBURGER.addEventListener("click", onHumburgerClick);

function turnOffScreenVertical() {
  document
    .querySelector(".welcome__black-screen-vertical")
    .classList.toggle("transparent");
}

function turnOffScreenHorisontal() {
  document
    .querySelector(".welcome__black-screen-horisontal")
    .classList.toggle("transparent");
}

Page.BUTTON_PHONE_VERTICAL.addEventListener("click", turnOffScreenVertical);
Page.BUTTON_PHONE_HORIZONTAL.addEventListener("click", turnOffScreenHorisontal);

function random(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function shuffle(array) {
  let inputCopy = array.slice();
  let result = [];
  while (inputCopy.length !== 0) {
    result = result.concat(
      inputCopy.splice(random(0, inputCopy.length - 1), 1)
    );
  }
  return result;
}

function onRadioButtonsClick() {
  let imagesItems = shuffle(Page.PORTFOLIO_IMAGES_ITEMS);
  // fill fragment
  imagesItems.forEach(element => {
    fragment.appendChild(element);
  });
  // delete old elements from list
  while (Page.PORTFOLIO_IMAGES_LIST.firstChild) {
    Page.PORTFOLIO_IMAGES_LIST.removeChild(
      Page.PORTFOLIO_IMAGES_LIST.firstChild
    );
  }
  // fill list from fragment
  Page.PORTFOLIO_IMAGES_LIST.appendChild(fragment);
}

Page.RADIO_BUTTONS.forEach(element => {
  element.addEventListener("click", onRadioButtonsClick);
});

function onImageClick() {
  Page.PORTFOLIO_IMAGES.forEach(element => {
    element.classList.remove("portfolio__image-shadow");
    this.classList.add("portfolio__image-shadow");
  });
}

Page.PORTFOLIO_IMAGES.forEach(element => {
  element.addEventListener("click", onImageClick);
});

function onFormSubmit(evt) {
  evt.preventDefault();

  let message = "Письмо отправлено";

  if (Page.FORM_SUBJECT.value !== "") {
    message += "\n" + "Тема: " + Page.FORM_SUBJECT.value;
  } else {
    message += "\nБез темы";
  }
  if (Page.FORM_TEXTAREA.value !== "") {
    message += "\n" + "Описание: " + Page.FORM_TEXTAREA.value;
  } else {
    message += "\nБез описания";
  }

  alert(message);
  Page.FORM.reset();
}

Page.FORM.addEventListener("submit", onFormSubmit);
