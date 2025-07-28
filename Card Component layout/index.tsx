import "./styles.css";

// +----------+  +----------+  +----------+
// |  Card 1  |  |  Card 2  |  |  Card 3  |
// +----------+  +----------+  +----------+
// +----------+  +----------+  +----------+
// |  Card 4  |  |  Card 5  |  |  Card 6  |
// +----------+  +----------+  +----------+

export default function App() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="cardContainer">
        {cards.map((ele) => (
          <div key={ele} className="card">
            {" "}
            cards {ele}{" "}
          </div>
        ))}
      </div>
    </>
  );
}
