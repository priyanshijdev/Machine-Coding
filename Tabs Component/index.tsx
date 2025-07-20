import { useEffect, useState } from "react";
import { ProfileTab } from "./ApiTask";
import { Interest } from "./Interest";
import { Setting } from "./Setting";
import "./styles.css";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Priya",
    age: 20,
    email: "priya@gmail.com",
    hobbies: ["yoga", "movies"],
  });

  const tabs = [
    {
      name: "Profile",
      component: ProfileTab,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Setting",
      component: Setting,
    },
  ];

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="App">
      <div style={{ gap: "20px", display: "flex" }}>
        {tabs.map((ele, index) => (
          <div
            key={index}
            style={{ border: "1px solid black", cursor: "pointer" }}
            onClick={() => setActiveTab(index)}
          >
            {ele.name}
          </div>
        ))}
      </div>
      <div>
        <ActiveComponent />
      </div>
    </div>
  );
}
