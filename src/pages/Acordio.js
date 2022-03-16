import { useState } from "react";

export default function Acordio() {
  const [display, setDisplay] = useState("hidden");
  const [llibre, setLlibre] = useState(null);

  /*
    si el {contingutLlibre} te la classe "displayNone". onClick a <h1>, setDisplay és igual a "". 
  */
  /*
 setDisplay(Llibre Actual "contingutLlibre") -> 
 */
  const swapClasses = (contingutLLibre) => {
    setLlibre(contingutLLibre);
    display === "hidden" ? setDisplay("") : setDisplay("hidden");
  };

  const contingut = [
    {
      title: "Titul1",
      content:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, ab aliquid esse eos nam, reprehenderit eum qui quisquam assumenda, quidem error dolorum earum. Commodi cum odio atque velit consectetur! Dicta, assumenda consequatur repellendus ex eligendi magni provident et dignissimos? Quos, quam. Placeat a voluptatem dicta eius voluptate consequuntur. Iusto ab natus pariatur iure dignissimos nesciunt laboriosam nisi ratione reiciendis?",
    },
    {
      title: "Titul2",
      content:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, ab aliquid esse eos nam, reprehenderit eum qui quisquam assumenda, quidem error dolorum earum. Commodi cum odio atque velit consectetur! Dicta, assumenda consequatur repellendus ex eligendi magni provident et dignissimos? Quos, quam. Placeat a voluptatem dicta eius voluptate consequuntur. Iusto ab natus pariatur iure dignissimos nesciunt laboriosam nisi ratione reiciendis?",
    },
    {
      title: "Titul3",
      content:
        "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, ab aliquid esse eos nam, reprehenderit eum qui quisquam assumenda, quidem error dolorum earum. Commodi cum odio atque velit consectetur! Dicta, assumenda consequatur repellendus ex eligendi magni provident et dignissimos? Quos, quam. Placeat a voluptatem dicta eius voluptate consequuntur. Iusto ab natus pariatur iure dignissimos nesciunt laboriosam nisi ratione reiciendis?",
    },
    {
      title: "Titul4",
      content:
        "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, ab aliquid esse eos nam, reprehenderit eum qui quisquam assumenda, quidem error dolorum earum. Commodi cum odio atque velit consectetur! Dicta, assumenda consequatur repellendus ex eligendi magni provident et dignissimos? Quos, quam. Placeat a voluptatem dicta eius voluptate consequuntur. Iusto ab natus pariatur iure dignissimos nesciunt laboriosam nisi ratione reiciendis?",
    },
  ];
  return (
    <>
      <div className="app-header">
        {contingut.map((contingutLlibre) => (
          <div className="wrapper">
            <h1 onClick={() => swapClasses(contingutLlibre.title)}>
              {contingutLlibre.title}
            </h1>
            <p
              className={contingutLlibre.title === llibre ? display : "hidden"}
            >
              {contingutLlibre.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
