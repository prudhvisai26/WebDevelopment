let words = document.querySelector(".text");
let button = document.querySelector("#countBtn");
let message = document.querySelector("#message");

button.addEventListener("click", () => {
  if (words.value === "") {
    message.innerHTML = "Please Enter Some Text!!";
  } else {
    let count = 0;
    const value = words.value;
    for (let i = 0; i < value.length; i++) {
      if (
        value[i] === "a" ||
        value[i] === "e" ||
        value[i] === "i" ||
        value[i] === "o" ||
        value[i] === "u"
      ) {
        count++;
      }
    }
    message.innerHTML = `The number of vowles in the text are ${count}`;
  }
});
