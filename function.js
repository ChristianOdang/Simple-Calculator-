const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "+", "-", "/", "%", "*", "="];
let output = "";

// Define function to calculate based on button clicked
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    // if value has '%', replace it with '/100' before evaluating
    output = eval(output.replace("%", "/100"));
    //AC btn
  } else if (btnValue === "AC") {
    output = "";
    //DEL btn
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
    // special charactersgh
  } else {
    if (output === "" && specialChars.includes(btnValue))
      return;
    output += btnValue;
  }
  display.value = output;
}
// Adding Event Listener to buttons
buttons.forEach((buttons) => {
  buttons.addEventListener("click", (e) =>
    calculate(e.target.dataset.value));
});