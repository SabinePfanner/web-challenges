console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
const a = Number(event.target.numberA.value);
const b = Number(event.target.numberB.value);
const operator = form.operator.value;
if (operator === "addition") {
  result = add(a,b);
}
if (operator ==="subtraction"){
  result = subtract(a,b);
} 
if (operator === "multiplication") {
  result = multiply(a,b);
}if (operator === "division") {
  result = divide(a,b);
}

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
