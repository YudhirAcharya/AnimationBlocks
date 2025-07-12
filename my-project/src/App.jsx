import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [cells, setCells] = useState(Array(300).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      const light = cells.map(() => Math.random() < 0.1);
      setCells(light);
    }, 500);
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <div
        className="grid  w-full h-full p-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(30, 1fr)",
          gridAutoRows: "1fr",
          rowGap: "2px",
          columnGap: "2px",
        }}
      >
        {cells.map((on, i) => (
          <div
            key={i}
            className={`w-full h-full duration-800 ${
              on ? "bg-purple-500 " : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
