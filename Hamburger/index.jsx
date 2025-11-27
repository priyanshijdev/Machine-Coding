import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  //   -------------------------------------------------------------------------
  // | Logo        |   Home   |   About   |   Services   |   Contact   | Login |
  //  -------------------------------------------------------------------------

  return (
    <div className="container">
      <div className="logo">Logo </div>
      {/* Nav Links */}

      {/* Hamburger Button (Mobile Only) */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="">
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          {/* </li> */}

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#contact">Contact</a>
        </ul>
      </div>
    </div>
  );
}
