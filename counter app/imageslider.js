import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200"
  ];

  const [index, setIndex] = useState(0);

  const left = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const right = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Slider</h1>

      <img
        src={images[index]}
        alt="slider"
        style={{ width: "300px", height: "200px" }}
      />

      <br /><br />

      <button onClick={left}>Left</button>
      <button onClick={right}>Right</button>
    </div>
  );
};

export default ImageSlider;