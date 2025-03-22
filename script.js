// HTML TAGS to JavaScript 
const buttons = document.querySelectorAll(".button");
const resultInput = document.querySelector("#result-input");
let string = "";

// Get all buttons 
buttons.forEach((button) => {

  // Add event listener
  button.addEventListener("click", () => {
    
    // If statement
    button.innerHTML == "C" ? string = " " : 
      button.innerHTML == "=" ? string = eval(string) : string += button.innerHTML

    // Result 
    resultInput.value = string;
  });
});