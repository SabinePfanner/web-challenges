import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button
      colorFont="#ff339a"
      background="#fff"
      text="Hallo Welt"
      disabled={false}
      handleClick={handleClick}
    />
  );
}

function Button({
  colorFont,
  disabled,
  text,
  background,
  handleClick,
  onClick,
}) {
  return (
    <button
      type="button"
      style={{ color: colorFont, backgroundColor: background }}
      disabled={disabled}
      handleClick={() => alert("You clicked me")}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
