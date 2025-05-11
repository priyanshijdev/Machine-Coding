import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name.trim()) {
      toast.success(`Hello, ${name}! Form submitted successfully.`, {
        position: "top-right",
      });
    } else {
      toast.error("Name is required");
    }
  };

  return (
    <div className="App">
      <h1>Hello Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", width: "50%", marginBottom: "10px" }}
        />
        <br />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Submit
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
