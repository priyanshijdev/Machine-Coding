import { useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const handleClickDec = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  };

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      <div
        style={{
          height: "25px",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#4caf50",
            textAlign: "center",
            lineHeight: "25px",
            color: "white",
          }}
        >
          {progress}%
        </div>
      </div>
      <button onClick={handleClick} style={{ marginTop: "10px" }}>
        Increase
      </button>{" "}
      <button onClick={handleClickDec} style={{ marginTop: "10px" }}>
        {" "}
        Decrease
      </button>
    </div>
  );
}
