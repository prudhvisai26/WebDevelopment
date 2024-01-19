const URL = "https://api.quotable.io/random";
let quote = document.querySelector(".quote");
let author = document.querySelector(".author_name");
let button = document.querySelector("button");
let speechBtn = document.querySelector(".speech");
let copyBtn = document.querySelector(".copy");
synth = speechSynthesis;

function fetchQuote() {
  button.classList.add("loading");
  button.innerText = "Loading Quote...";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
      button.classList.remove("loading");
      button.innerText = "New Quote";
    });
}

speechBtn.addEventListener("click", () => {
  if (!button.classList.contains("loading")) {
    let utterance = new SpeechSynthesisUtterance(
      `${quote.innerText} by ${author.innerText}`
    );
    synth.speak(utterance);
    setInterval(() => {
      !synth.speaking
        ? speechBtn.classList.remove("active")
        : speechBtn.classList.add("active");
    }, 10);
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.innerText);
});

button.addEventListener("click", fetchQuote);
