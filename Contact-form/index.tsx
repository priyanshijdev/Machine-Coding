import { useState } from "react";

// contact form
export const User = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleClick() {
    alert("Form Send ");
  }

  return (
    <form
      method="POST"
      action="https://questions.greatfrontend.com/api/questions/contact-form"
    >
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <div>
          Name:
          <input
            type="text"
            value={data.name}
            onChange={(e: any) => setData(e.target.value)}
          />
          <br />
          <br />
          Email:
          <input
            type="email"
            value={data.email}
            onChange={(e: any) => setData(e.target.value)}
          />
          <br /> <br />
          Message:
          <textarea
            value={data.message}
            rows={5}
            cols={30}
            required
            onChange={(e: any) => setData(e.target.value)}
          />
        </div>
        <br />
        <button onClick={() => handleClick()}>Send</button>
      </div>
    </form>
  );
};
