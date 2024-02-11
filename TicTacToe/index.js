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

currentPlayer = x;
init();

function init() {
  boxEl.forEach((box) => box.addEventListener("click", boxClick));
}

function boxClick(e) {
  console.log(e.index);
}
