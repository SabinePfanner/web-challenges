import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  const codeIsValid = code === validCode;

  function handleClick(event) {
    setCode(code + event.target.textContent);
  }

  function handleReset() {
    setCode("");
  }

  return (
    <div className="container">
      <p>
        {validCode} should match:{code}
      </p>
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {codeIsValid && <p>Valid code!</p>}
    </div>
  );
}
