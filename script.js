"use strict";

const pianoKeys = document.querySelectorAll(".piano-keys .key");
const btn = document.querySelector(".btn");
const spanElements = document.querySelectorAll("li span");

let audio = new Audio("tunes/a.wav");
let isCleared = false;
let originalContent = [];

spanElements.forEach((span, index) => {
  originalContent[index] = span.innerHTML;
});

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => {
    playTune(key.dataset.key);
  });
});

const pressedKey = (e) => {
  playTune(e.key);
};

document.addEventListener("keydown", pressedKey);

btn.addEventListener("click", () => {
  spanElements.forEach((span, index) => {
    span.innerHTML = isCleared ? originalContent[index] : "";
  });

  isCleared = !isCleared;
});
