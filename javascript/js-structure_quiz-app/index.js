import { App } from "./components/App/app.js";
// Store the cards in a global state


// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
