import { useState } from "react";

let images = [
  "https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Renault-Scenic_2017_C01.jpg?itok=DvyqBgCa",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeep-wrangler-rubicon-392-port-1605620194.jpg",
  "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/21MY_Z900_BK4_STU.png",
  "https://www.honda.es/content/dam/central/motorcycles/supersports/cbr650r_2022/Top-XL-Tile-Module/CBR650R-3-quarter-front-right-side-smartphone.jpg/jcr:content/renditions/m_r.jpg",
];

export default function Graella() {
  const [fotoEmagatzemada, setFotoEmagatzemada] = useState("");
  const [imgClass, setImgClass] = useState("");

  const swapClass = (imgActual) => {
    setFotoEmagatzemada(imgActual);
    if (imgClass === "") {
      setImgClass("gran");
    } else {
      setImgClass("");
    }
  };

  return (
    <>
      <div className="grid-graella">
        {images.map((imgActual) => (
          <div>
            <img
              onClick={() => swapClass(imgActual)}
              className={fotoEmagatzemada === imgActual ? imgClass : ""}
              src={imgActual}
              width="50%"
              height="100%"
              alt="moto"
            />
          </div>
        ))}
      </div>
    </>
  );
}
