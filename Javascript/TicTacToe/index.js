const boxEl = document.querySelectorAll(".box");
const restartEl = document.querySelector("button");
const statusEl = document.querySelector(".status");
let x = "<img src='X-Player.png'>";
let o = "<img src='O-Player.png'>";

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = x;
let options = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let running = false;
init();

function init() {
  boxEl.forEach((box) => box.addEventListener("click", boxClick));
  restartEl.addEventListener("click", restartGame);
  statusEl.textContent = `Now ${player} Turn`;
  running = true;
}

function restartGame() {
  options = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = x;
  player = "X";
  running = true;
  statusEl.textContent = `Now "${player}" Turn`;
  statusEl.style.color = "black";
  restartEl.innerHTML = "Restart 🔁";
  boxEl.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("win");
  });
}

function boxClick(e) {
  const index = e.target.dataset.index;
  if (options[index] != "" || !running) {
    return;
  }
  updateBox(index, e.target);
  checkwin();
}

function updateBox(index, box) {
  options[index] = player;
  box.innerHTML = currentPlayer;
}

function changePlayer() {
  if (currentPlayer == x) {
    currentPlayer = o;
    player = "O";
  } else {
    currentPlayer = x;
    player = "X";
  }
  statusEl.textContent = `Now ${player} Turn`;
  statusEl.style.color = "black";
}

function checkwin() {
  let isWon = false;
  for (let i = 0; i < win.length; i++) {
    const data = win[i];
    const box1 = options[data[0]];
    const box2 = options[data[1]];
    const box3 = options[data[2]];
    if (box1 == "" || box2 == "" || box3 == "") continue;
    else if (box1 == box2 && box2 == box3) {
      isWon = true;
      boxEl[data[0]].classList.add("win");
      boxEl[data[1]].classList.add("win");
      boxEl[data[2]].classList.add("win");
    }
  }
  if (isWon) {
    statusEl.textContent = `Hurrah...! "${player}" Won the game🕺`;
    statusEl.style.color = "green";
    restartEl.textContent = "Play Again 😉";
    running = false;
  } else if (!options.includes("")) {
    statusEl.innerHTML = `Oops..! Game Draw..!`;
    statusEl.style.color = "red";
    restartEl.textContent = "Play Again 😌";
    running = false;
  } else {
    changePlayer();
  }
}
