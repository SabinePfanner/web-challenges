import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={false} />;
}

function Smiley({ isHappy }) {
  return <>{isHappy ? <span>&#x1F60A;</span> : <span>&#x1F614;</span>}</>;
}
