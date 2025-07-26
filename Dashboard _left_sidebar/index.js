// 	Grid + Flex	Dashboard layout with left sidebar

import "./styles.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Content from "./component/Content";

// ----------------------------------------------------
// | navebar |       Header                          |
// |         |----------------------------------------|
// |         |                                        |
// |         |           Main Content                |
// |         |                                        |
// ----------------------------------------------------

export default function App() {
  return (
    <>
      <Navbar />
      <div className="rows">
        <Header />
        <Content />
      </div>
    </>
  );
}
