
// Example: Create User Form
// Fields: name, email, phone, address.
// Validate required fields, email format, phone digits.

--------------------------------------------------
|               Create New User                  |
--------------------------------------------------

[ Name            _______________________  ]  ❌ Required

[ Email           _______________________  ]  ❌ Enter valid email

[ Phone           _______________________  ]  ❌ Only digits allowed

[ Address         _______________________  ]  ❌ Required

[     Submit     ]

--------------------------------------------------

✅ Success! User created successfully.
❌ Error! Failed to create user. Please try again.

import React, { useState } from "react";

export const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "email is required";
    } // for valid email ::
    else if (!emailRegex.test(form.email)) {
      newErrors.email = "enter valid email";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "email is required";
    } // for valid phone ::
    else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "enter valid phone no";
    }
    if (!form.address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setMessage("Form submitted successfully!");
      console.log("Form data:", form);
      alert("User created successfully");
      setForm({ name: "", email: "", phone: "", address: "" });
      setErrors({});
    } else {
      setMessage("");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h2> Create a new User</h2>
          Name :
          <input
            //   type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          <br /> <br />
          Email:
          <input
            name="email"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
          <br /> <br />
          Number :
          <input
            name="phone"
            placeholder="number"
            value={form.phone}
            onChange={handleChange}
            // onChange={(e)=>setForm(e.target.value)}
          />
          {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
          <br /> <br />
          Address :
          <input
            name="address"
            placeholder="address"
            value={form.address}
            onChange={handleChange}
            // onChange={(e)=>setForm(e.target.value)}
          />
          {errors.address && (
            <span style={{ color: "red" }}>{errors.address}</span>
          )}
          <br /> <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    </>
  );
};
