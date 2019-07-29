const button = document.querySelector(".js-btn");
const input = document.querySelector(".js-text-box");
const clue = document.querySelector(".js-clue");

debugger;

function numberGame() {
  const inputValue = parseInt(input.value);

  if (inputValue === randomNumber) {
    return (clue.innerHTML = `¡HAS GANADO, CAMPEONA!`);
  } else if (inputValue > randomNumber) {
    return (clue.innerHTML = `Demasiado alto`);
  } else {
    return (clue.innerHTML = `Demasiado bajo`);
  }
}

function getRandomNumber(max) {
  return Math.floor(Math.random * max);
}

const randomNumber = getRandomNumber(100);

button.addEventListener("click", numberGame);
