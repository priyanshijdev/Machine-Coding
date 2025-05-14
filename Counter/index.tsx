task:
🔹 Auto-starts from 0 on page load
⏹ Has a Stop button to pause the counter
▶️ Has a Start button to resume it
🔁 A Reset button to bring it back to 0

import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setCount((c) => c + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);
  const handleReset = () => {
    setCount(0);
    setRunning(false);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => setRunning(true)} disabled={running}>
          ▶️ Start
        </button>
        <button onClick={() => setRunning(false)} disabled={!running}>
          ▶️ Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
