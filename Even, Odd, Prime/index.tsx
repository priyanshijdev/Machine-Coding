import React, { useState } from "react";

// In the following design, evens are green,
//odds are yellow and prime numbers are red.
// Build the following colors using React component

export default function App() {
  // const arr = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  // ];
  const arr = Array.from({ length: 40 }, (_, i) => i + 1);
  // logic for prime number
  const isPrime = (num: any) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
      return true;
    }
  };
  // const bgColor = isPrime(item) ? "blue" : item % 2 === 0 ? "green" : "red";
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {arr.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              width: "10%",
              boxSizing: "border-box",
              padding: "8px",
              border: "1px solid #ccc",
              backgroundColor: isPrime(item)
                ? "red"
                : item % 2 === 0
                ? "green"
                : "yellow",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
