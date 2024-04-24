import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <Button
      colorFont="#ff339a"
      background="#fff"
      text="Hallo Welt"
      disabled={false}
      onClick={handleClick}
    />
  );
}

function Button({ colorFont, disabled, text, background, onClick }) {
  return (
    <button
      type="button"
      style={{ color: colorFont, backgroundColor: background }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
