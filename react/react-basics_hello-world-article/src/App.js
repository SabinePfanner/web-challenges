import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hi, I´am a react element</h1>
      <p>Great, let us add a button too</p>
      <button type="button" onClick={() => console.log("Awesome")}>
        Click me
      </button>
    </article>
  );
}
