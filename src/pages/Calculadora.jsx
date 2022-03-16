import { useState } from "react";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function Calculadora() {
  const [antic, setAntic] = useState(0);
  const [operacio, setOperacio] = useState("");
  const [display, setDisplay] = useState(0);
  const [novaEntrada, setNovaEntrada] = useState(false);
  const entraOperacio = (operacio) => {
    setNovaEntrada(true);
    setAntic(display);
    if (!novaEntrada) calcular();
    setOperacio(operacio);
  };
  const calcular = () => {
    if (operacio === "+") setDisplay(antic + display);
    if (operacio === "-") setDisplay(antic - display);
  };
  const entrarNumero = (numero) => {
    if (novaEntrada === true) setDisplay(numero);
    else setDisplay(display * 10 + numero);
    setNovaEntrada(false);
  };
  return (
    <>
      <div className="calculadora_wrapper">
        <div className="calculadora_display">{display}</div>
        <br />
        <div className="calculadora_wrapper-numeros">
          {numeros.map((numero) => (
            <button onClick={() => entrarNumero(numero)}>{numero}</button>
          ))}
        </div>
        <br />
        <div className="calculadora_wrapepr-operadors">
          <button onClick={() => entraOperacio("+")}>+</button>
          <button onClick={() => entraOperacio("-")}>-</button>
        </div>
        <br />
        <button onClick={calcular}>=</button>
      </div>
    </>
  );
}
