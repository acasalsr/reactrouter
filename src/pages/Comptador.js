import { useState } from "react";

export default function Comptador() {
  const [displayNumero, setDisplayNumero] = useState(0);
  const increment = () => setDisplayNumero((n) => n + 1);

  const sumaUn = () =>
    displayNumero >= 10 ? alert("No pot ser més gran a 10") : increment(); //setDisplayNumero((n) => n + 1); //Com crridar una funció {increment}

  const restaUn = () =>
    displayNumero <= 0
      ? alert("No pot ser més petit a 0")
      : setDisplayNumero((n) => n - 1);

  const sumaCinc = () =>
    displayNumero >= 6
      ? alert("No es pot fer aquesta operacio")
      : setDisplayNumero((n) => n + 5);

  return (
    <>
      <div className="container-comptador">
        <div className="display">{displayNumero}</div>
        <button onClick={() => sumaUn()}>+1</button>
        <button onClick={() => restaUn()}>-1</button>
        <button onClick={() => sumaCinc()}>+5</button>
      </div>
    </>
  );
}
