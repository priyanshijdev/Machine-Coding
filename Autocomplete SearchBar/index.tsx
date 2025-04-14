import { useEffect, useState } from "react";
import "./styles.css";

// auto complete search bar ---
// ask where will we get data dump?
// also onblur and onfocus features
export default function App() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  // function for api call
  const fetchData = async () => {
    console.log(" heyyyy", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResult(json?.recipes);
  };

  useEffect(() => {
    fetchData();
    // implement debounding -> it will not fecth data on every key stroke
    // when user pause then only apu call were made .
    const timer = setTimeout(fetchData, 300);
    // unmounting
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="App">
      <h1>Automatic Search Bar</h1>
      <input
        type="text"
        className="search-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResult(true)}
        onBlur={() => setShowResult(false)}
      />
      <div className="result-container">
        {showResult &&
          result.map((row: any) => (
            <span className="result" key={row.id}>
              {row?.name}
            </span>
          ))}
      </div>
    </div>
  );
}
