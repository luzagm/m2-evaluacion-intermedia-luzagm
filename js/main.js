const button = document.querySelector(".js-btn");
const input = document.querySelector(".js-text-box");
const clue = document.querySelector(".js-clue");
const tries = document.querySelector(".js-tries");

function game() {
  numberGame();
  countTries();
}

function numberGame() {
  const inputValue = parseInt(input.value);

  if (inputValue === randomNumber) {
    clue.innerHTML = `¡HAS GANADO, CAMPEONA!`;
  } else if (inputValue > randomNumber) {
    clue.innerHTML = `Demasiado alto`;
  } else {
    clue.innerHTML = `Demasiado bajo`;
  }
}

let count = 0;
function countTries() {
  count += 1;
  tries.innerHTML = count;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

button.addEventListener("click", game);

console.log(`Mi número aleatorio es ${randomNumber}`);
