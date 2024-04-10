console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');



// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain (diameter1, diameter2) {
  const area1 = Math.PI * ((diameter1 / 2) ** 2);
  // console.log("Area1: " + area1);
  const area2 = Math.PI * (diameter2 / 2)**2;
  // console.log("Area 2 " + area2);
  const pizzaGain = (area2 - area1) / area1 * 100;
  console.log("PizzaGain " + Math.round(pizzaGain) + "%");
}

pizzaInput1.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput.value;
  return pizzaSize1;
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize2 = pizzaInput.value;
  return pizzaSize2
  // write your code here
});
calculatePizzaGain(pizzaSize1, pizzaInput2);


// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
