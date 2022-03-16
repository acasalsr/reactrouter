import { useState, useEffect } from "react";

export default function Rellotge() {
  const [update, setUpdate] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setInterval(() => {
      setUpdate((n) => n + 1);
    }, 1000);
  }, []);

  const today = new Date();
  const date =
    today.getDate() + ":" + (today.getMonth() + 1) + ":" + today.getFullYear();

  const checkStatus = () =>
    status === "" ? setStatus("hidden") : setStatus("");

  return (
    <>
      <div className="container-digital-watch">
        <h2>
          {today.getHours()} : {today.getMinutes()} : {today.getSeconds()}
        </h2>
        <p className={status}>{date}</p>
        <button onClick={checkStatus} className={status}>
          Amagar Data
        </button>
        <button onClick={checkStatus} className={status === "" ? "hidden" : ""}>
          Veure Data
        </button>
      </div>
    </>
  );
}
