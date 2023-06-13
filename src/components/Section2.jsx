import React, { useEffect, useState } from "react";

const Section2 = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [radius, setRadiur] = useState(50);

  useEffect(() => {
    let r = height <= width;
  });

  return (
    <div>
      <p>Dick</p>
    </div>
  );
};

export default Section2;
