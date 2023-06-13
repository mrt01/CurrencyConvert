import React, { useState, useEffect } from "react";

const Section1 = () => {
  const [power, setPower] = useState(0);
  const [over9000, isOver9000] = useState(false);

  useEffect(() => {
    isOver9000(power >= 9000);
  }, [power]);

  return (
    <div>
      <h1>Ultimate Power</h1>
      <h3>I got the power!</h3>
      <p className="power">
        <strong>Power Level:</strong> {power}
      </p>
      <input
        type="range"
        value={power}
        onChange={(e) => {
          setPower(e.target.value);
        }}
        min="0"
        max="10000"
      />
      {over9000 && <p>It's over 9000!!!!</p>}
    </div>
  );
};

export default Section1;
