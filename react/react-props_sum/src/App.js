import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={3} valueB={2} />;
}

function Sum({ valueA, valueB }) {
  const Summe = valueA + valueB;
  return (
    <>
      <p>Summe = {Summe}</p>
    </>
  );
}
