import React from "react";
import Pot from "./Pot";
import Vegetal from "./Vegetal";

const Plant: React.FC = () => {
  return (
    <div className="relative w-32">
      <div id="vegetal" className="relative flex flex-col items-center">
        <Vegetal />
        <Vegetal />
      </div>
      <Pot />
    </div>
  );
};

export default Plant;
