import React from "react";
import "./styles.css";

export default function App() {
  return <newArticle />;
}

function newArticle() {
  return (
    <article className="article">
      <h2 className="article__title">This is a new article</h2>
      <label htmlFor="newInput">Input</label>
      <input id="newInput" type="text" placeholder="This is an input"></input>
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        What is react
      </a>
    </article>
  );
}
