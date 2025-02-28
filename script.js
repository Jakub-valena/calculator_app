const buttons = document.querySelectorAll(".button");
const resultInput = document.querySelector("#result-input");
let string = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.innerHTML == "Del") {
      string -= "";
    } else if (button.innerHTML == "C") {
      string = "";
    } else if (button.innerHTML == "=") {
      string = eval(string);
    } else {
      string += button.innerHTML;
    }
    resultInput.value = string;
  });
});
