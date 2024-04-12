console.clear();

const form = document.querySelector('[data-js="form"]');
const firstName = document.querySelector('[data-js="firstName"]');
const badness = document.querySelector('[data-js="badness"]');
const age = document.querySelector('[data-js="age"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("Form submitted")
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data: ", data);
  const Name = firstName.Value;
  const ageBadness = Number(age.value) + Number(badness.value);
  console.log(`The age-badness-sum of ${Name} is ${ageBadness}.`);
  event.target.reset();
  event.target.firstName.focus();
//   const Name = firstName.value;
// const ageBadness = age.value + badness.value
// console.log(`The age-badness-sum of ${Name} is ${ageBadness}.`)
});

// form.addEventListener("input", (event) =>{
//     const Name = firstName.value;
//     const ageBadness = Number(age.value) + Number(badness.value);
//     console.log(`The age-badness-sum of ${Name} is ${ageBadness}.`)
    
// } )



