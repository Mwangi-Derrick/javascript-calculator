const numbers = document.querySelectorAll("[data-number]");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsToButton = document.getElementById("equal-to");
const operators = document.querySelectorAll("[data-operation]");

const display = document.getElementById("numberdisplay");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let shouldResetDisplay = false;

// Append numbers to display
numbers.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    if (shouldResetDisplay) {
      display.value = "";
      shouldResetDisplay = false;
    }
    display.value += numberButton.innerText;
  });
});

// Handle operators
operators.forEach((opButton) => {
  opButton.addEventListener("click", () => {
    if (display.value === "") return; // Prevent clicking operator first
    if (operator !== "") return; // Prevent multiple operators

    firstOperand = display.value;
    operator = opButton.value;
    shouldResetDisplay = true;
    display.value = firstOperand + operator
  });
});

// Equals button - perform calculation
equalsToButton.addEventListener("click", () => {
  if (operator === "" || shouldResetDisplay) return;

  secondOperand = display.value;
  let result;
  
  switch (operator) {
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    case "%":
      result = parseFloat(firstOperand) % parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
  }

  display.value = result;
  firstOperand = result;
  secondOperand = "";
  operator = "";
  shouldResetDisplay = true;
});

// Clear button - reset everything
clearButton.addEventListener("click", () => {
  display.value = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  shouldResetDisplay = false;
});

// Delete button - remove last digit
deleteButton.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});



