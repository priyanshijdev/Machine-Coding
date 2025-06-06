import { useEffect, useState } from "react";
import './styles.css';
// Build a simple GitHub User Search interface.
// An input field to search GitHub users.
// Fetch matching users from the GitHub API:
// https://api.github.com/search/users?q={searchTerm}

export const Search = () => {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products/");
    const json = await data.json();
    setResult(json);
    console.log("data----", json);
  };


  useEffect(() => {
    fetchData();
    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
      {" "}
      Search Any Item
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search any Clothes"
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />
         <div className="result-container">
        { showResult &&
          result.map((data:any) =>
          <div>
            {data.title}
            </div>
          )
        }
      </div>
      </div>
      <div>
        {/* {
          result.map((data:any) =>
          <div>
            {data.title}
            </div>
          )
        } */}
        </div>
    </>
  );
};
