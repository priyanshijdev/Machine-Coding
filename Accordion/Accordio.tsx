import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginBottom: "8px",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          background: "#f5f5f5",
          padding: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      {isOpen && <div style={{ padding: "10px" }}>{children}</div>}
    </div>
  );
};

export default Accordion;
