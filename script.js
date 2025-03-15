// HTML TAGS to JavaScript 
const buttons = document.querySelectorAll(".button");
const resultInput = document.querySelector("#result-input");
let string = "";

// Get all buttons 
buttons.forEach(function (button) {
  
  // Add event listener
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
    
    // Result 
    resultInput.value = string;
  });
});
