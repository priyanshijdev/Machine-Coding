import { useEffect, useState } from "react";
import "./styles.css";

// tip to add animations use - translate , tranform
const ProgressBar = ({ progress }) => {
  const [animate, setAnimate] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimate(progress), 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={
          // { width: `${progress}%` }
          { transform: `translateX(${animate - 100}%)` }
        }
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
      >
        {progress}{" "}
      </div>
    </div>
  );
};

export default function App() {
  const bars = [5, 10, 30, 40, 50, 90];
  return (
    <div className="App">
      <h1> Progress Bar</h1>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}
