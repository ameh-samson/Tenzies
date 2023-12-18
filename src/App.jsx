import React from "react";
import Die from "./components/Die";
import "./App.css";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const diceElements = dice.map((die) => <Die value={die} />);

  function handleRollClick() {
    setDice(allNewDice());
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button onClick={handleRollClick}>Roll</button>
    </main>
  );
}