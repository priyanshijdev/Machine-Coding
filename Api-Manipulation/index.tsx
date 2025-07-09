import { useEffect, useState } from "react";

// Fetch Data – use the PokéAPI to fetch Pokémon details.

// API endpoint: https://pokeapi.co/api/v2/pokemon/{name}
// Display Info:
// Name Image , search
// Base stats (HP, Attack, Defense, etc.)

export const Poke = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [allData, setAllData] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const result = await response.json();
    setData(result);
  };

  const handleData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const result = await response.json();
    setAllData(result.results);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      {/* <div> */}
      <h2>Pokémon List</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "10px",
          maxWidth: "500px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        {allData.map((ele) => (
          <span key={ele.name} style={{ marginRight: "10px" }}>
            <li> {ele.name} </li>
          </span>
        ))}
      </div>
      <br />
      <div style={{ padding: 20 }}>
        Search for Cartoon!
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Pokémon name"
        />{" "}
        <button onClick={handleSearch}>Search</button>
      </div>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>Types:{data.types.map((ele: any) => ele.type.name).join(" , ") }</p>
        </div>
      )}
    </div>
  );
};
