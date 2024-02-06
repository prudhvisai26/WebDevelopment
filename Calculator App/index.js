const result = document.querySelector("#result");
const buttons = document.querySelectorAll('input[type="button"]');

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    const lastChar = result.value.charAt(result.value.length - 1);
    if (!"+-*/.".includes(lastChar) || !"+-*/.".includes(key)) {
      result.value += key;
    }
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    del();
  }
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const input_value = buttons[i].value;
    if (input_value === "AC") {
      result.value = "";
    } else if (input_value === "=") {
      calculate();
    } else if (input_value == "DE") {
      del();
    } else {
      const lastChar = result.value.charAt(result.value.length - 1);
      if (!"+-*/.".includes(lastChar) || !"+-*/.".includes(input_value)) {
        result.value += input_value;
      }
    }
  });
}

function calculate() {
  result.value = eval(result.value);
  console.log(result.value);
}

function del() {
  var len = result.value.length - 1;
  result.value = result.value.substring(0, len);
}
