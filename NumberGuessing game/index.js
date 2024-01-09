let randomNum = Math.floor(Math.random() * 100) + 1;
turn = 1;

let guess = document.querySelector(".number");
let previousguess = document.querySelector(".previous-guess");
let result = document.querySelector(".result");
let message = document.querySelector(".message");

let guessbutton = document.querySelector(".button");
let newgame = document.getElementById("newgame");

function showdata() {
  if (guess.value === "") {
    alert("Please enter a number!");
    return;
  }
  if (guess.value == randomNum) {
    result.innerHTML = "Congratulations You have won!!";
    result.style.backgroundColor = "green";
    guessStyle();
    setGameOver();
  } else if (turn === 10) {
    result.innerHTML = "You Lose! The Number was " + randomNum;
    result.style.backgroundColor = "red";
    guessStyle();
    setGameOver();
  } else if (guess.value > randomNum) {
    message.innerHTML = "Too High! Try Again.";
    messageStyle();
  } else {
    message.innerHTML = "Too Low! Try Again.";
    messageStyle();
  }
  if (turn === 1) {
    previousguess.innerHTML += "Previous guesses: ";
  }
  previousguess.innerHTML += guess.value + " ";
  guess.value = "";
  turn += 1;
  guess.focus();
}

function guessStyle() {
  result.style.padding = "7px";
  message.style.backgroundColor = "";
  message.style.padding = "";
  message.innerHTML = "";
  newgame.style.display = "block";
}

function messageStyle() {
  message.style.backgroundColor = "red";
  message.style.padding = "7px";
  newgame.style.display = "none";
}

function setGameOver() {
  guess.disabled = true;
  guessbutton.disabled = true;
}

function newGame() {
  guess.disabled = false;
  guessbutton.disabled = false;
  previousguess.innerHTML = "";
  result.innerHTML = "";
  message.innerHTML = "";
  result.style.backgroundColor = "";
  result.style.padding = "";
  turn = 1;
}
