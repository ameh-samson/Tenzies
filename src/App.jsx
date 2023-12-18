import React from "react";
import Die from "./components/Die";
import "./App.css";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  const randomNumbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 6) + 1
  );
  console.log(randomNumbers);

  function allNewDice() {
    // creates an array of 10 random numbers
    const newDice = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 6) + 1
    );

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
