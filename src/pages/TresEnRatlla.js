import { useState } from "react";

export default function TresEnRatall() {
  const winnerArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
  ];

  const game = ["", "", "", "", "", "", "", "", ""];
  const [pulsar, setPulsar] = useState(0);
  const [arr, setArr] = useState(game);
  const [arrX, setArrX] = useState([]);
  const [arrO, setArrO] = useState([]);

  let clickContainer = (indexArrayMap) => {
    if (pulsar % 2 === 0) {
      setPulsar((n) => n + 1);
      arr[indexArrayMap] = "X";
      setArr([...arr]);
      setArrX([...arr]);
    } else {
      setPulsar((n) => n + 1);
      arr[indexArrayMap] = "O";
      setArr([...arr]);
      setArrO([...arr]);
    }
  };

  /*
  winnerArrays.find((combinacioGuanyadora) => {
    const [a, b, c] = combinacioGuanyadora;
    const esGuanyador = arr[a] !== "" && arr[a] === arr[b] && arr[b] === arr[c];
  });
  */
  
  return (
    <>
      <div className="wrapper-tres-en-ratlla">
        {arr.map((xo_, index) => (
          <div
            onClick={() => clickContainer(index)}
            className="container_tres-en-ratlla"
          >
            {xo_}
          </div>
        ))}
      </div>
    </>
  );
}
