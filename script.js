"use strict";

var links = document.querySelectorAll('.header__link');
var arrows = document.querySelectorAll('.welcome__arrow');
var screens = document.querySelectorAll('.welcome__black-screen');
var radioButtons = document.querySelectorAll('.portfolio__radio-label');
var buttonVerticalPhone = document.querySelector('.welcome__phone-button-vertical');
var buttonHorisontalPhone = document.querySelector('.welcome__phone-button-horisontal');
var fragment = document.createDocumentFragment();
var portfolioImagesItems = [...document.querySelectorAll('.portfolio__images-item')];
var portfolioImagesList = document.querySelector('.portfolio__images-list');
var portfolioImages = [...document.querySelectorAll('.portfolio__image')];

function toggleLinkActive() {
  for (var j = 0; j < links.length; j++) {
    links[j].classList.remove('header__link--active');
    this.classList.add("header__link--active");
  }
}

for (var j = 0; j < links.length; j++) {
  links[j].addEventListener('click', toggleLinkActive);
}

function changeSlide() {
  document.querySelector('.welcome__slide').classList.toggle('visibility-hidden');
}

for (var i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener('click', changeSlide);
}

function turnOffScreenVertical() {
  document.querySelector('.welcome__black-screen-vertical')
    .classList.toggle('transparent');
}

function turnOffScreenHorisontal() {
  document.querySelector('.welcome__black-screen-horisontal')
    .classList.toggle('transparent');
}

buttonVerticalPhone.addEventListener('click', turnOffScreenVertical);
buttonHorisontalPhone.addEventListener('click', turnOffScreenHorisontal);

function random(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function shuffle(array) {
  var inputCopy = array.slice();
  var result = [];
  while (inputCopy.length !== 0) {
    result = result.concat(inputCopy.splice(random(0, inputCopy.length - 1), 1));
  }
  return result;
}

function onRadioButtonsClick() {
  // fill fragment
  var imagesItems = shuffle(portfolioImagesItems);
  for (var y = 0; y < imagesItems.length; y++) {
    fragment.appendChild(imagesItems[y]);
  }
  // delete old elements from list
  while (portfolioImagesList.firstChild) {
    portfolioImagesList.removeChild(portfolioImagesList.firstChild);
  }
  // fill list from fragment
  portfolioImagesList.appendChild(fragment);
}

for (var u = 0; u < radioButtons.length; u++) {
  radioButtons[u].addEventListener('click', onRadioButtonsClick);
}

function onImageClick() {
  portfolioImages.forEach(element => {
    element.classList.remove('portfolio__image-shadow');
    this.classList.add('portfolio__image-shadow');
  });
}

portfolioImages.forEach(element => {
  element.addEventListener('click', onImageClick)
});
