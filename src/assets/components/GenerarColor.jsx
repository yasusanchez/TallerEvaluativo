import { useState } from "react";

 const coloresAbsolutos = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
  "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080",
  "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

export const GenerarColor = () => {
  const [color, setColor] = useState("#FFFFFF");

  const cambiarColor = () => {
    const nuevoColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setColor(nuevoColor);
  };

  return (
    <div style={{ backgroundColor: color, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <p>Color actual: {color}</p>
      <button onClick={cambiarColor}>Generar Color</button>
    </div>
  );
};

