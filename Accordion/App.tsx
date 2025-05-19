import Accordion from "./Accordion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Accordion </h1>

      <div>
        <Accordion title="Section 1">
          <p>This is the content for section 1.</p>
        </Accordion>
        <Accordion title="Section 2">
          <p>This is the content for section 2.</p>
        </Accordion>
      </div>
    </div>
  );
}
