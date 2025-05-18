import React, { useState } from "react";

export const App = () => {
  const [isActivetab, setTab] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleNext = () => {
    // next tab handler :
    // this is for handling navigation
    if (isActivetab === 1 && form.name.trim() !== "") {
      setTab(2);
    } else if (isActivetab === 2 && form.email.trim()! == "") {
      setTab(3);
    }
  };
  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };
  const handlePrevious = () => {
    if (isActivetab > 1) {
      setTab(isActivetab - 1);
    }
  };

  return (
    <>
      {isActivetab === 1 && (
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter Name"
        />
      )}

      {isActivetab === 2 && (
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Enter Email"
        />
      )}
      <div>
        <br />
        {/* <button>Next </button> */}

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={isActivetab === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
        </div>
        <button style={{ marginLeft: "1rem" }}>Submit </button>
      </div>
    </>
  );
};
