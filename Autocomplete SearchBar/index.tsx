import { useEffect, useState } from "react";
import "./styles.css";

// auto complete search
// ask where will we get data dump?
export default function App() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");

  // function for api call
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResult(json?.recipes);
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div className="App">
      <h1>Automatic Search Bar</h1>
      <input
        type="text"
        className="search-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="result-container">
        {result.map((row: any) => (
          <span className="result" key={row.id}>
            {row?.name}
          </span>
        ))}
      </div>
    </div>
  );
}
