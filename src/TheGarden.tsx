import React from "react";
import Plant from "./components/Plant/Plant";

const TheGarden: React.FC = () => {
  const date = new Date(Date.now());
  const name = "Gui";
  return (
    <div className="bg-cyan-400 text-white text-center h-screen flex flex-col">
      <h1 className="mt-5 mb-auto text-4xl">Jardins.</h1>
      <div className="bg-cyan-300 h-[90vh] w-full pt-10 flex flex-col justify-end">
        <div className="bg-green-700 z-50 w-full h-16 px-5 pb-5 flex flex-row  items-end justify-start space-x-3">
          <Plant name={name} date={date} />
          <Plant name={name} date={date} />
          <Plant name={name} date={date} />
        </div>
      </div>
    </div>
  );
};

export default TheGarden;
