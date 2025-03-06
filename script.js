"use strict";

const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volume = document.querySelector(".volume-slider input");
const btn = document.querySelector(".keys-checkbox input");
const container = document.querySelector(".container");
const moon = document.querySelector(".moon");

let audioMap = {};
let clickSound = new Audio("soundClick.mp3");

pianoKeys.forEach((key) => {
  let note = key.dataset.key;
  audioMap[note] = new Audio(`${note}.wav`);
});

const playTune = (key) => {
  if (audioMap[key]) {
    audioMap[key].currentTime = 0;
    audioMap[key].play();
  }

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  if (audioMap[e.key]) {
    playTune(e.key);
  }
};

const handleVolume = (e) => {
  for (let key in audioMap) {
    audioMap[key].volume = e.target.value;
  }
};

const hideShowBtn = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
  clickSound.play();
};

const changeTheme = () => {
  container.classList.toggle("backColor");
  moon.classList.toggle("stroke");
};

document.addEventListener("keydown", pressedKey);
volume.addEventListener("input", handleVolume);
btn.addEventListener("click", hideShowBtn);
moon.addEventListener("click", changeTheme);
