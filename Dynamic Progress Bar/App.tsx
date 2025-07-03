import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((prev: any) => (prev == 100 ? prev : prev + 1));
    }, 100);
  }, []);

  return (
    <div className="App">
      Progress Bar
      <Progressbar value={value} />
    </div>
  );
}
