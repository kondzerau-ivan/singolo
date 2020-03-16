"use strict";

var links = document.querySelectorAll('.header__link');
var arrows = document.querySelectorAll('.welcome__arrow');
var screens = document.querySelectorAll('.welcome__black-screen');
var radioButtons = document.querySelectorAll('.portfolio__radio-label');

function toggleLinkActive() {
  for (var j = 0; j < links.length; j++) {
    links[j].classList.remove('header__link--active');
    this.classList.add("header__link--active");
  }
}

for (var j = 0; j < links.length; j++) {
  links[j].addEventListener('click', toggleLinkActive);
}

function changeSlide () {
  document.querySelector('.welcome__slide').classList.toggle('visibility-hidden');
}

for (var i = 0; i < arrows.length; i++){
  arrows[i].addEventListener('click', changeSlide);
}

function turnOffScreen() {
  this.classList.toggle('transparent');
}

for (var o = 0; o < screens.length; o++) {
  screens[o].addEventListener('click', turnOffScreen);
}

function shuffle() {
  var inputCopy = array.slice();
  var result = [];
  while (inputCopy.length !== 0) {
    result = inputCopy.splice(random(0, inputCopy.length - 1), 1);
  }
  return result;
}

for (var u = 0; u < radioButtons.length; u++) {
  radioButtons.addEventListener('click', )
}
