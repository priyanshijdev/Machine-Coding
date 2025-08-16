import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleCountAdd() {
    setCount((prev) => prev + 1);
  }

  function handleCountSub() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="App">
      <h1> Counter </h1>
      <button onClick={handleCountAdd}>Count + </button>
      <br />
      {count}
      <br />
      <button onClick={handleCountSub}>Count - </button>
      {/* <p>{count}</p> */}
    </div>
  );
}
