const numberPeopleInSpace = document.querySelector(
  '[data-js="number-people-in-space"]'
);
const url = "http://api.open-notify.org/astros.json";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  numberPeopleInSpace.textContent = data.number;
  // console.log(data);
  // console.log(data.people);
  // console.log(data.people[0].name);
  renderPeople(data.people);
  renderCrafts(data.people);
}

fetchData();

const ul = document.createElement("ul");
document.body.append(ul);

function renderPeople(people) {
  people.forEach((person) => {
    const listElement = document.createElement("li");
    listElement.textContent = person.name;
    ul.append(listElement);
  });
}

// function renderCrafts(crafts) {
//   crafts.forEach((person) => {
//     const button = document.createElement("button");
//     button.textContent = person.craft;
//     ul.append(button);
//     button.addEventListener ("click", () => {
//       const craftTeam = people.filter ((person) => person.craft = "Test");
//     });
//   });
// }
