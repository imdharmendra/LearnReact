import { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

function Banner() {
  const [img, setImg] = useState(image1);

  return (
    <>
      <img src={img} width="100%" />
      <br />
      <button onClick={() => setImg(image1)}>Image 1</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setImg(image2)}>Image 2</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setImg(image3)}>Image 3</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setImg(image4)}>Image 4</button>
    </>
  );
}

export default Banner;
