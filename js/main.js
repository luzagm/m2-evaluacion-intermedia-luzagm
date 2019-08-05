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

  const updateClue = function(text) {
    clue.innerHTML = text;
  };

  if (input.value === "") {
    updateClue("Escribe un número, por favor");
  } else if (inputValue < 0 || inputValue > 100) {
    updateClue("Escribe un número entre 0 y 100");
  } else if (inputValue === randomNumber) {
    updateClue("¡Has ganado, campeona!");
  } else if (inputValue > randomNumber) {
    updateClue("Demasiado alto");
  } else {
    updateClue("Demasiado bajo");
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
  clue.innerHTML = "Escribe un número y dale a <em>Prueba</em>";
}

button.addEventListener("click", game);
resetBtn.addEventListener("click", resetGame);

console.log(`Mi número aleatorio es ${randomNumber}`);
