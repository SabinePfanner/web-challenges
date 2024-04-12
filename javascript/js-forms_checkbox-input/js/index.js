console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const formSuccess = document.querySelector('[data-js="success"]');


function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideFormSuccess () {
  formSuccess.setAttribute("hidden","");
}

function showFormSuccess () {
  formSuccess.removeAttribute("hidden");
}

// function showTosError() {
//   if (tosCheckbox.checked !== true) {
//     ;
//   }
// }
hideTosError();
hideFormSuccess();

tosCheckbox.addEventListener("input", (event) => {
  if (event.target.checked === true) {
    // console.log("true");
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // --v-- write your code here --v--
  if (tosCheckbox.checked !== true) {
    showTosError();
  } else {
    hideTosError();
    showFormSuccess();
    alert("Form submitted");

  }
  // --^-- write your code here --^--
  // eslint-disable-next-line no-alert
});

// tosCheckbox.addEventListener("input", (event) => {
//   if (event.target.checked === true) {
//     // console.log("true");
//     ;
//   } else {
    
//   }
// });


// function showTosError() {
//   if (tosCheckbox.checked !== true) {
//     ;
//   }
// }




// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   tosCheckbox.addEventListener("input", (event) => {
//     if (event.target.checked !== true) {
//       // console.log("true");
//       tosError.removeAttribute("hidden");
//     } else {
//       alert("Form submitted")
//     }
//   });

//   // --v-- write your code here --v--
//   // if (tosCheckbox.checked !== true) {
//   //   return ;
//   // } else {
    
//   // }
//   // --^-- write your code here --^--
//   // eslint-disable-next-line no-alert
// });