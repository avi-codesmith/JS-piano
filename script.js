"use strict";

const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volume = document.querySelector(".volume-slider input");
const btn = document.querySelector(".keys-checkbox input");
const container = document.querySelector(".container");
const moon = document.querySelector(".moon");

let allKeys = [];
let audio = new Audio("a.wav");
let clickSound = new Audio("soundClick.mp3");

const playTune = (key) => {
  audio.src = `${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => {
    allKeys.push(key.dataset.key);
    playTune(key.dataset.key);
  });
});

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  playTune(key.dataset.key);
});

const pressedKey = (e) => {
  if (allKeys.includes(e.key)) {
    playTune(e.key);
  }
};

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const hideShowBtn = () => {
  pianoKeys.forEach((key) => {
    key.classList.toggle("hide");
    clickSound.play();
  });
};

const changeTheme = () => {
  container.classList.toggle("backColor");
  moon.classList.toggle("stroke");
};

document.addEventListener("keydown", pressedKey);
volume.addEventListener("input", handleVolume);
btn.addEventListener("click", hideShowBtn);
moon.addEventListener("click", changeTheme);
