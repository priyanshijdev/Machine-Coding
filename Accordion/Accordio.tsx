import { useState, useEffect } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}
const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          marginBottom: "8px",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            padding: "10px",
            backgroundColor: "gray",
            color: "black",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          {title}
        </div>
        {isOpen && <div style={{ padding: "8px" }}> {children}</div>}
      </div>
    </>
  );
};

export default Accordion;
