import React, { useState } from "react";

// Build a simple Toggle Button component in React.
// When clicked, it should switch between “ON” and “OFF”.

// Just set toggle to flip --> if state is on then set false.

export default function App() {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked((prev) => !prev);
  };
  return (
    <div className="App">
      <button
        onClick={toggle}
        style={{
          padding: "10px 20px",
          backgroundColor: clicked ? "green" : "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {clicked ? "On" : "Off"}
      </button>
    </div>
  );
}
