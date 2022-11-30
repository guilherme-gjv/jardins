import React from "react";
import Cloud, { CloudSizes } from "./components/Cloud";
import Plant from "./components/Plant/Plant";

const TheGarden: React.FC = () => {
  return (
    <div className="bg-cyan-400 text-white text-center h-screen flex flex-col">
      <h1 className="mt-5 mb-auto text-4xl">Jardins.</h1>
      <div className="bg-cyan-300 h-[90vh] w-full pt-10 flex flex-col justify-end">
        <div className="absolute bg-red-5 top-32 z-10 w-full">
          <Cloud size={CloudSizes.MEDIUM} />
        </div>
        <div className="bg-green-700 z-50 w-full h-16 px-5 pb-5 flex flex-row  items-end justify-start space-x-3">
          <Plant />
          <Plant />
          <Plant />
        </div>
      </div>
    </div>
  );
};

export default TheGarden;
