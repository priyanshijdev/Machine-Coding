circle on the screen wherever the user click:

export default function App() {
  const [circles, setCircles] = useState([]);

  const handleClick = (e: any) => {
    setCircles([...circles, { x: e.clientX, y: e.clientY }]);
  };

  return (
    <div className="App">
      <h1> Mouse clicking events::</h1>
      <div
        onClick={handleClick}
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          backgroundColor: "#f5f5f5",
          cursor: "crosshair",
        }}
      ></div>
      {circles.map((circle: any, i: any) => (
        <div
          key={i}
          style={{
            width: 6,
            height: 6,
            backgroundColor: "black",
            borderRadius: "50%",
            position: "absolute",
            top: circle.y - 3, // half of 6px to center
            left: circle.x - 3,
          }}
        />
      ))}
    </div>
  );
}
