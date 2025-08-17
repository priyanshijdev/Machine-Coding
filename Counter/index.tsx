import "./styles.css";
import { useState, useEffect } from "react";

// 🔹 Auto-starts from 0 on page load
// ⏹ Has a Stop button to pause the counter
// ▶️ Has a Start button to resume it
// 🔁 A Reset button to bring it back to 0
export default function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(true);

  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }

    // cleanup when stopped OR component unmounts
    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="App">
      <h1> Counter </h1>
      <button onClick={() => setStart(true)}>start</button>{" "}
      <button onClick={() => setStart(false)}>Stop</button> <br />
      {count}
      <br />
      <button
        onClick={() => {
          setCount(0);
          setStart(false); // also stop on reset
        }}
      >
        Reset
      </button>
    </div>
  );
}
