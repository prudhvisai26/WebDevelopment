let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count++;
  countEl.innerText = count;
}

function save() {
  if (count == 0) {
    return;
  }
  let save = " " + count + " - ";
  saveEl.innerText += save;
  count = 0;
  countEl.innerText = count;
}
