import React, { useEffect, useState } from "react";

export const Debounce = () => {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const fetchData = async (searchText: string) => {
    const data = await fetch("https://fakestoreapi.com/products/");
    const json = await data.json();

    const filtered = json.filter((item: any) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setResult(filtered);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim() !== "") {
        fetchData(input);
      } else {
        setResult([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <label> Search Anything: </label>
      <input
        type="text"
        value={input}
        placeholder="Search any Clothes"
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResult(true)}
        onBlur={() => setShowResult(false)}
      />
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "6px",
          maxHeight: "200px",
          overflowY: "auto",
          backgroundColor: "#fff",
          width: "70%",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
      >
        {showResult && result.map((data: any) => <div>{data.title}</div>)}
      </div>
    </div>
  );
};
