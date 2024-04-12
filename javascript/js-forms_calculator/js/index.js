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
const a = event.target.numberA.value;
const b = event.target.numberB.value;
const operator = form.operator.value;
if (operator === "addition") {
  add(a,b);
  console.log(add)
}
if (operator ==="substraction"){

} 
if (operator === "multiplication") {

}else {
  
}

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
