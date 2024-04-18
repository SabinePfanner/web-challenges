const numberPeopleInSpace = document.querySelector(
  '[data-js="number-people-in-space"]'
);
const url = "http://api.open-notify.org/astros.json";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  numberPeopleInSpace.textContent = data.number;
  //   console.log(data);
  //   console.log(data.people);
  //   console.log(data.people[0].name);
  renderPeople(data.people);
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
