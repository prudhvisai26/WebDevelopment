let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let isClicked = false;
let message = "";
let cards = [];

let player = {
  name: "Luffy",
  chips: 145,
};

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.innerText = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber == 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  if (!isClicked) {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = 0;
    sum += firstCard + secondCard;
    renderGame();
  } else {
    alert("You have already started the game!!");
  }
}

function renderGame() {
  if (sum < 21) {
    message = "DO you want to draw a new card?";
    isClicked = true;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! ";
    hasBlackJack = true;
    isClicked = false;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
    isClicked = false;
  }
  messageEl.innerText = message;
  sumEl.innerText = "Sum: " + sum;
  cardsEl.innerText = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerText += " " + cards[i];
  }
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
