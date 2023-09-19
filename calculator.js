//storing the buutons in variables and arrays
const numbers = document.querySelectorAll("[data-operation]");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsToButton = document.getElementById("equal-to");
const myArray = Array.from(numbers);
const calcButtons = myArray.concat([clearButton, deleteButton, equalsToButton]);
//styles the calculator buttons
calcButtons.forEach((calcbutton) => {
  calcbutton.style.color = "#ff9f63";
});
//displays numbers in the input field
var display = document.getElementById("numberdisplay");
var numberButtons = document.querySelectorAll("[data-number]");
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", function (e) {
    var finalValue = (display.value += numberButton.innerText);
    finalValue = display.value;
    e.target.style.backgroundColor = "";
  });
});

//clears the values in the input field
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function clear() {
  var display = document.getElementById("numberdisplay");
  display.value = "";
});
//deletes the last value in the input field
let deletebtn = document.getElementById("delete");
deletebtn.addEventListener("click", function Del() {
  var display = document.getElementById("numberdisplay");
  let currentValue = display.value;
  display.value = currentValue.slice(0,-1);
});
//displaying the operators on the calculaor input field
let computators = document.querySelectorAll("[data-operation]");
computators.forEach((computator) => {
  computator.addEventListener("click", function () {
    var finalValue = display.value + computator.innerText;
    display.value = finalValue;
  });
})

//initializing variables to empty strings
let firstOperand = "";
let secondOperand = "";
let $operator = "";
const _divide = document.getElementById('divide');
const _subtract = document.getElementById('subtract');
const _modulus = document.getElementById('per-cent');
const _multiply = document.getElementById('multiply');
const _equals = document.getElementById('equal-to');
const _add = document.getElementById('add');
 
_divide.addEventListener("click", () => {
  $operator = "/";
});
_modulus.addEventListener("click", () => {
  $operator = "%";
});
_multiply.addEventListener("click", () => {
  $operator = "*";
});
_add.addEventListener("click", () => {
  $operator = "+";
});
_subtract.addEventListener("click", () => {
  $operator = "-";
});

//perform the calculation when equals button is clicked
_equals.addEventListener("click", () => {
  if ($operator !== "") {
    secondOperand = display.value;
    let result;
    switch ($operator) {
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
    
  }
});

//update first and second operand when input changes
display.addEventListener("input", () => { result = display.value });

f






