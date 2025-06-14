import { useState } from "react";

import Interest from "./Interest";
import Profile from "./Profile";
import Setting from "./Setting";

export const Main = () => {
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
      component: Profile,
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
  const ActiveTabComp = tabs[activeTab].component;

  return (
    <div>
      <div className="headingContainer">
        {tabs.map((t: any, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className="heading"
          >
            {t.name}{" "}
          </div>
        ))}
      </div>
      <br />
      <div className="component-body">
        <ActiveTabComp data={data} setData={setData} />
      </div>
    </div>
  );
};
