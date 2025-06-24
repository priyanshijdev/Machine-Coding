import React, { useState } from "react";

export const ValidateForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });
 // important ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    alert("Data saves successfully");
    setForm({ name: "", email: "", age: "" });
  };
  return (
    <div>
      <div>
        <label> Name: </label>
        <input
          placeholder="Enter Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label> Email: </label>
        <input
          name="email"
          placeholder="Enter email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <label> age: </label>
        <input
          name="age"
          placeholder="Enter Age"
          type="number"
          value={form.age}
          onChange={handleChange}
        />
      </div>
      <br />
      <button onClick={handleSubmit}> Submit </button>
    </div>
  );
};
