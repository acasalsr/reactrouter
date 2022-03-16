import { useState } from "react";

export default function Toggle() {
  const [textPremut, setTextPremut] = useState("No està premut");
  const [color, setColor] = useState("");
  const swapElements = () => {
    textPremut === "No està premut"
      ? setTextPremut("Està premut")
      : setTextPremut("No està premut");
    swapColor();
  };

  const swapColor = () => {
    textPremut === "Està premut" ? setColor("") : setColor("button-color");
  };

  return (
    <>
      <div className="flex-container">
        <button onClick={swapElements} className={color}>
          Click on me!
        </button>
        <h3>
          {textPremut === "Està premut" ? "Està premut" : "No està premut"}
        </h3>
      </div>
    </>
  );
}
