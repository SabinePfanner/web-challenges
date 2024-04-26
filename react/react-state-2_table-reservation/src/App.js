import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAddPeople() {
    setPeople(people + 1);
    console.log(people);
  }

  function handleRemovePeople() {
    setPeople(people - 1);
    console.log(people);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onClickAddPeople={handleAddPeople}
        onClickRemovePeople={handleRemovePeople}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
