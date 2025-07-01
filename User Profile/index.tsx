import { useState } from "react";

// Problem Link: https://namastedev.com/practice/user-profile

export const User = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <img
        width="100"
        height="100"
        src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp"
        alt="User Image"
      />
      <div>
        <label>John Deo</label>
        <br />
        <br />
        <button onClick={() => setVisible((prev) => !prev)}>
          {isVisible ? "Hide Bio" : " Show Bio"}
        </button>
      </div>
      <br />
      {isVisible && (
        <span>Frontend developer who loves React and coffee ☕️</span>
      )}
    </div>
  );
};
