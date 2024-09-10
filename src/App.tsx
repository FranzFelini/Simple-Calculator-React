import { useState } from "react";
import "./App.css";
import { Input } from "./InputCmp";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const number = input;
  Number(input);
  Number(setInput);

  function backtozero() {
    setCount(0);
  }
  function Add() {
    setCount((count) => count + Number(number));
  }
  function Divide() {
    setCount((count) => count / Number(number));
  }
  function Sub() {
    if (count === 0) {
      alert("cant go bellow 0");
      return;
    }
    setCount((count) => count - Number(number));
  }
  function MullB5() {
    setCount((count) => count * Number(number));
  }

  return (
    <div className="App">
      <h1>Counter = {count}</h1>
      <div>
        <button onClick={Add}> + {number}</button>
        <button onClick={Sub}> - {number}</button>
        <button onClick={MullB5}> * {number} </button>
        <button onClick={Divide}> / {number} </button>
        <br></br>
        <button
          style={{
            marginTop: "1em",
            marginBottom: "1em",
            backgroundColor: "green",
          }}
          onClick={backtozero}
        >
          {" "}
          Reset counter{" "}
        </button>

        <div
          style={{
            position: "relative",
          }}
        >
          <Input
            id="Input"
            input={input.toString()}
            setInput={(newValue: string) => setInput(Number(newValue))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
