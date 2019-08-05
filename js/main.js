"use strict";

const button = document.querySelector(".js-btn");
const input = document.querySelector(".js-text-box");
const clue = document.querySelector(".js-clue");
const tries = document.querySelector(".js-tries");
const resetBtn = document.querySelector(".js-reset");

const randomNumber = getRandomNumber(100);
let count = 0;

function game(event) {
  event.preventDefault();
  numberGame();
  countTries();
}

function numberGame() {
  const inputValue = parseInt(input.value);

  if (inputValue === null) {
    clue.innerHTML = `Escribe un número, por favor`;
  } else if (inputValue < 0 || inputValue > 100) {
    clue.innerHTML = `Escribe un número entre 1 y 100`;
  } else if (inputValue === randomNumber) {
    clue.innerHTML = `¡Has ganado, campeona!`;
  } else if (inputValue > randomNumber) {
    clue.innerHTML = `Demasiado alto`;
  } else {
    clue.innerHTML = `Demasiado bajo`;
  }
}

function countTries() {
  count += 1;
  tries.innerHTML = count;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function resetGame() {
  tries.innerHTML = 0;
  input.value = "";
}

button.addEventListener("click", game);
resetBtn.addEventListener("click", resetGame);

console.log(`Mi número aleatorio es ${randomNumber}`);
