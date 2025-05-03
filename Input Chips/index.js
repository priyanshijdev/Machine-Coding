
import React, { useState } from "react";

function ChipsInput() {
  const [input, setInput] = useState("");
  const [chips, setChips]= useState([])

  const handleKeyDown = (e) => {
    if (e.key == "Enter" && input !=="") {
      // setChips({ ...prev, input })
      setChips(prev => [...prev, input]);
      setInput("")
    }
  }

  const handleDelete = (index) => {
    const copyChips = [...chips];
    copyChips.splice(index, 1);
    setChips(copyChips);
  }
  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        value={input}
        style={{ padding: "8px", width: "200px" }}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e)=>handleKeyDown(e)}
      />
      <div style={{display:"flex"}}>
        {chips.map((chip) => 
          <div style={{
            background: "gray",
            margin: "18px",
            padding: "5px",
            color:"white"
          }}>{chip}
            <button
              onClick={() => handleDelete()}
              style={{color:"red"}}
            > {" "}X
            </button>
          </div>
      )}
      </div>
    </div>
  );
}

export default ChipsInput;
