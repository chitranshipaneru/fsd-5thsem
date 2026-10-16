import React, { useState } from "react";

const ImageRotator = () => {
  const [rotation, setRotation] = useState(0);

  const left = () => {
    setRotation(rotation - 90);
  };

  const right = () => {
    setRotation(rotation + 90);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        Image Rotator
      </h1>

      <img
        src="https://picsum.photos/id/1025/300/200"
        alt="rotator"
        style={{
          width: "300px",
          height: "200px",
          transform: `rotate(${rotation}deg)`
        }}
      />

      <br /><br />

      <button onClick={left}>Left</button>
      <button onClick={right}>Right</button>
    </div>
  );
};

export default ImageRotator;