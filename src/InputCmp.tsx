import React from "react";
import { Xcmp } from "./ConditionalRenderCmp";

export function Input({
  input,
  setInput,
}: {
  input: string;
  setInput: (newValue: string) => void;
}) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (!Number.isNaN(Number(value))) {
      setInput(value);
    }
  }

  const showX = input != "0" && input != "1" && input.trim() !== "";

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          marginTop: "1.5em",
        }}
      >
        <input value={input} onChange={handleChange} />
        {showX ? <Xcmp resetState={() => setInput("0")} /> : null}
      </div>
    </div>
  );
}
